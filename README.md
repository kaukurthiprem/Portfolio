# K. Prem Kumar — Animated Developer Portfolio

A responsive, animated developer portfolio built with **React, Vite, and Express.js**. It showcases my profile, technical skills, projects, and contact information, with a working contact form that stores enquiries in MongoDB and sends email notifications.

## ✨ Features

- Responsive portfolio for desktop, tablet, and mobile.
- Animated user interface and interactive sections.
- Projects, technical skills, and professional profile showcase.
- Contact form with input validation.
- Express.js REST API for handling contact enquiries.
- MongoDB database integration using Mongoose.
- Email notifications using Nodemailer and Gmail SMTP.
- API rate limiting to reduce repeated submissions.
- Security middleware using Helmet and CORS.
- Environment-based configuration for sensitive credentials.
- Health-check endpoint for monitoring backend availability.

## 🛠️ Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Email notifications | Nodemailer, Gmail SMTP |
| Security | Helmet, CORS, Express Rate Limit |
| Development tools | VS Code, npm, Git, GitHub |

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets
├── src/                    # React application source
├── server/
│   ├── server.js           # Express API and email notifications
│   ├── package.json        # Backend dependencies and scripts
│   ├── .env                # Backend secrets (not committed)
│   └── .env.example        # Backend configuration template
├── index.html              # Main HTML document
├── package.json            # Frontend dependencies and scripts
├── .env                    # Local frontend configuration
├── .env.example            # Frontend configuration template
├── .gitignore              # Files excluded from Git
└── README.md
```

*Note: Some filenames or folders may differ slightly depending on the current repository.*

## ⚙️ Requirements

- Node.js and npm
- A MongoDB database, such as MongoDB Atlas
- A Gmail account and Gmail App Password for email notifications
- Git and GitHub for version control
- VS Code or another code editor

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd portfolio
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Configure the backend

Open a terminal in the project folder and run:

```powershell
cd server
npm install
Copy-Item .env.example .env
```

Open `server/.env` and configure your MongoDB and email settings:

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
MONGODB_DB_NAME=prem_portfolio

FRONTEND_ORIGINS=http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=YOUR_SENDING_GMAIL_ADDRESS
SMTP_PASSWORD=YOUR_GMAIL_APP_PASSWORD

NOTIFICATION_TO=premkumarssmb@gmail.com
NOTIFICATION_FROM=YOUR_SENDING_GMAIL_ADDRESS
```

Replace the example values with your actual configuration. The Gmail account used in `SMTP_USER` must match the account that generated the App Password. `NOTIFICATION_TO` is the destination for contact notifications.

**Security:** Never commit your `.env` file, database credentials, or Gmail App Password to GitHub.

Start the backend:

```powershell
npm run dev
```

If your backend does not define a `dev` script, use:

```powershell
node server.js
```

The API should start at:

`http://localhost:5000`

### 3. Check the backend

Open the following URL in your browser:

`http://localhost:5000/api/health`

A healthy response should resemble:

```json
{
  "status": "ok",
  "database": "connected"
}
```

### 4. Configure the frontend

Open a second terminal in the project root:

```powershell
cd ..
npm install
```

Create the root `.env` file from the provided template if needed:

```powershell
Copy-Item .env.example .env
```

Set the frontend API URL in the root `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Start the frontend:

```powershell
npm run dev
```

Open the Vite development URL shown in the terminal, usually:

`http://localhost:5173`

Keep the frontend and backend terminals running while testing.

## 📬 How Contact Enquiries Work

1. A visitor enters their name, email address, enquiry type, and message.
2. The React frontend sends the form data to `POST /api/contact`.
3. Express validates the input and applies rate limiting.
4. Mongoose saves the enquiry in MongoDB.
5. Nodemailer attempts to send an email notification to the configured destination.
6. The API returns a response to the frontend.

The enquiry is saved before the email is sent. If email delivery fails, the saved enquiry remains in MongoDB.

### API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Checks backend and database availability |
| POST | `/api/contact` | Validates and saves a contact enquiry, then attempts email notification |

The API does not provide a public endpoint for listing private contact enquiries.

## 🌐 Production Deployment

The frontend and backend can be deployed separately.

### Backend — Render

1. Push the project to GitHub.
2. Create a Web Service in Render and connect your repository.
3. Set the root directory to `server`.
4. Use `npm install` as the build command.
5. Use `node server.js` as the start command.
6. Add the backend environment variables in Render's Environment settings.
7. Set `NODE_ENV=production`.
8. Set `FRONTEND_ORIGINS` to your exact deployed frontend origin after deployment.

Ensure the hosted backend can reach your MongoDB database. Check the database network access settings before deployment.

### Frontend — Vercel

1. Import your GitHub repository into Vercel.
2. Set the project root to the folder containing the frontend `package.json`.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Set `VITE_API_BASE_URL` to your deployed backend URL, for example `https://your-api.onrender.com`.
6. Deploy or redeploy the frontend.

Use the actual URLs assigned to your services. Do not use `localhost` in the deployed frontend configuration.

### After deployment

- Open the deployed backend's `/api/health` endpoint.
- Submit a test contact enquiry from the public website.
- Verify the enquiry is saved in MongoDB.
- Check the destination email inbox, including Spam.
- Check the hosting logs if the request or email notification fails.

Free hosting plans may have usage limits, cold starts, or other restrictions. Review the providers' current terms before deployment.

## 🔐 Security and Privacy

- Keep MongoDB credentials and SMTP secrets in backend environment variables.
- Never expose backend secrets in frontend variables or public source code.
- Use a dedicated MongoDB database user with the minimum required permissions.
- Restrict CORS to the exact frontend origin used in production.
- Use HTTPS for the public website and API.
- Avoid logging passwords, connection strings, or sensitive enquiry contents.
- Explain how contact details are used and retained before launching publicly.
- Periodically review and remove enquiries that are no longer needed.

## 🧪 Testing Checklist

- [ ] Frontend loads correctly on desktop and mobile.
- [ ] Backend health endpoint reports a connected database.
- [ ] Valid contact form submissions are saved in MongoDB.
- [ ] Invalid submissions are rejected.
- [ ] Email notifications are received successfully.
- [ ] The frontend communicates with the deployed API.
- [ ] Environment variables and credentials are not committed to GitHub.

## 👨‍💻 Author

**K. Prem Kumar**

Developer portfolio showcasing my technical skills, projects, and professional profile.

- **GitHub:** Add your GitHub profile URL
- **Portfolio:** Add your deployed website URL
- **Email:** `premkumarssmb@gmail.com`

## 📄 License

Add a license if you intend to distribute or reuse this project publicly. Without a specified license, do not assume others have permission to reuse the code.
