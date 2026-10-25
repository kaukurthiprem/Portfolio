
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

const app = express();
const port = Number(process.env.PORT || 5000);

const allowedOrigins = (
  process.env.FRONTEND_ORIGINS || 'http://localhost:5173'
)
  .split(',')
  .map(value => value.trim())
  .filter(Boolean);

app.use(helmet());

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Origin not allowed by CORS'));
  }
}));

app.use(express.json({ limit: '12kb' }));

// MongoDB enquiry schema
const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    maxlength: 254
  },
  workType: { type: String, default: 'Other' },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('ContactEnquiry', enquirySchema);

// Gmail email configuration
const emailConfigured = Boolean(
  process.env.SMTP_USER &&
  process.env.SMTP_PASSWORD &&
  process.env.NOTIFICATION_TO
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

// Limit contact form submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

// Health check
app.get('/api/health', (_req, res) => {
  const connected = mongoose.connection.readyState === 1;

  res.status(connected ? 200 : 503).json({
    status: connected ? 'ok' : 'unavailable',
    database: connected ? 'connected' : 'not connected'
  });
});

// Contact form
app.post('/api/contact', contactLimiter, async (req, res) => {
  const name =
    typeof req.body?.name === 'string' ? req.body.name.trim() : '';

  const email =
    typeof req.body?.email === 'string'
      ? req.body.email.trim().toLowerCase()
      : '';

  const workType =
    typeof req.body?.workType === 'string'
      ? req.body.workType.trim()
      : 'Other';

  const message =
    typeof req.body?.message === 'string'
      ? req.body.message.trim()
      : '';

  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({
      message: 'Enter a name between 2 and 100 characters.'
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      message: 'Enter a valid email address.'
    });
  }

  if (message.length < 10 || message.length > 5000) {
    return res.status(400).json({
      message: 'Enter a message between 10 and 5,000 characters.'
    });
  }

  const allowedTypes = [
    'Freelance project',
    'Full-time job opportunity',
    'Internship opportunity',
    'Collaboration',
    'Other'
  ];

  try {
    // 1. Save the enquiry first
    const enquiry = await Enquiry.create({
      name,
      email,
      workType: allowedTypes.includes(workType) ? workType : 'Other',
      message
    });

    console.log('Contact enquiry saved:', enquiry._id);

    // 2. Send email notification
    if (emailConfigured) {
      try {
        await transporter.sendMail({
          from: process.env.NOTIFICATION_FROM || process.env.SMTP_USER,
          to: process.env.NOTIFICATION_TO,
          replyTo: email,
          subject: `New portfolio enquiry: ${name}`,
          text: [
            'You received a new portfolio contact form submission.',
            '',
            `Name: ${name}`,
            `Email: ${email}`,
            `Enquiry type: ${enquiry.workType}`,
            '',
            'Message:',
            message,
            '',
            `Enquiry ID: ${enquiry._id}`,
            `Received: ${enquiry.createdAt.toISOString()}`
          ].join('\n')
        });

        console.log('Email notification sent successfully.');
      } catch (emailError) {
        // Keep the saved enquiry even if email delivery fails
        console.error('Email notification failed:', emailError.message);
      }
    } else {
      console.warn(
        'Email not configured. Check SMTP_USER, SMTP_PASSWORD and NOTIFICATION_TO in server/.env.'
      );
    }

    // 3. Report successful saving to the frontend
    return res.status(201).json({
      message: 'Thanks! Your message has been saved.',
      enquiryId: enquiry._id
    });
  } catch (error) {
    console.error('Could not save enquiry:', error.message);

    return res.status(503).json({
      message: 'Unable to save your message right now. Please try again later.'
    });
  }
});

// Start server after MongoDB connects
async function startServer() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('Missing MONGODB_URI in server/.env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB_NAME || 'prem_portfolio',
      serverSelectionTimeoutMS: 10000
    });

    console.log('MongoDB connected successfully.');

    app.listen(port, () => {
      console.log(`Portfolio contact API listening on port ${port}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

startServer();
