import { fetchQuote, sendEmail } from "./qoute";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const quote = await fetchQuote();
      await sendEmail(quote);
      res.status(200).json({ message: "Quote sent successfully!", quote });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quote or send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}