require("dotenv").config();
const axios = require("axios");
const nodemailer = require("nodemailer");

const QUOTE_API_URL = process.env.QUOTE_API_URL;

async function fetchQuote() {
  try {
    const response = await axios.get(QUOTE_API_URL);
    const quoteData = response.data[0];
    return `"${quoteData.q}" - ${quoteData.a}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "Quote service unavailable.";
  }
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(quote) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: "🌟 Your Daily Quote 🌟",
    html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 500px; background: white; padding: 20px; margin: auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333;">🌟 Your Daily Motivation 🌟</h2>
            <blockquote style="font-size: 18px; font-style: italic; color: #555; margin: 20px 0;">${quote}</blockquote>
            <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">
            <p style="font-size: 14px; color: #777;">Have a great day! ✨</p>
            <p style="font-size: 12px; color: #aaa;">This email was sent automatically. No reply is needed.</p>
          </div>
        </div>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = { fetchQuote, sendEmail };