const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require("validator");
const sgMail = require("@sendgrid/mail");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Set SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.json());

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, jobType, message } = req.body;

  // Validate input
  if (!name) return res.status(400).json({ error: 'Name is required.' });
  if (!email) return res.status(400).json({ error: 'Email is required.' });
  if (!validator.isEmail(email)) return res.status(400).json({ error: 'Invalid email format.' });
  if (!jobType) return res.status(400).json({ error: 'Job Type is required.' });
  if (!message) return res.status(400).json({ error: 'Message is required.' });

  const msg = {
    to: process.env.EMAIL_TO, // Use environment variable
    from: process.env.EMAIL_FROM, // Use environment variable
    subject: `Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Job Type: ${jobType}
      Message: ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #007bff; border-radius: 8px; color: #fff;">
        <div style="margin-bottom: 20px;">
          <div style="background-image: url('https://img.freepik.com/premium-photo/abstract-background-images-wallpaper-ai-generated_643360-3032.jpg'); background-size: cover; padding: 20px; border-top-left-radius: 8px; border-top-right-radius: 8px; text-align: center;">
            <img src="https://marketplace.canva.com/EAF65EWbuV0/4/0/1600w/canva-black-and-blue-simple-creative-illustrative-dragons-e-sport-logo-NO64HUH8vCA.jpg" alt="Logo" style="width: 155px; border-radius:100px; border: 2px solid #ffffff;"/>
          </div>
          <h2 style="margin: 10px 0; color: #007bff;">New Contact Form Submission</h2>
          <p style="font-size: 16px;">You have received a new message from the contact form:</p>
          <hr style="border: 1px solid #eaeaea;"/>
          <p style="font-size: 14px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Email:</strong> <span style="color: #ffcc00; font-weight: bold;"><a href="mailto:${email}" style="color: #ffcc00; text-decoration: none;">${email}</a></span></p>
          <p style="font-size: 14px;"><strong>Job Type:</strong> ${jobType}</p>
          <p style="font-size: 14px;"><strong>Message:</strong><br>${message}</p>
          <footer style="margin-top: 20px; font-size: 12px; color: #aaa; text-align: center;">
            <p style="font-size: 12px; color:yellow;">This email was sent from your contact form.</p>
          </footer>
        </div>
      </div>
    `,
  };

  // Send email
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Email sent successfully!" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error sending email." });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//////////////////////////// Server ///////////////////////////////////

