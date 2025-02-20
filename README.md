
# Daily Quote API

This API fetches a random daily quote from [ZenQuotes.io](https://zenquotes.io/api/random/) and sends it to the provided email address every day at 9 AM.

## How it works

1. **Quote API**: The API calls the ZenQuotes API (`https://zenquotes.io/api/random/`) to fetch a random quote every day.
2. **Email Delivery**: The fetched quote is then sent to the provided email address.
3. **Cron Job**: The process of sending the quote happens automatically every day at 9 AM via a cron job.

## Features

- **Daily Quote**: Receive a new inspirational quote each day.
- **Email Delivery**: Quotes are delivered to your inbox at 9 AM.
- **Scheduled**: The cron job is set up to ensure the quote is sent at the same time every day.

## API Endpoint

- **URL**: `https://zenquotes.io/api/random/`
- **Method**: `GET`
- **Response**: A random quote in JSON format.

Example response:
```json
{
  "q": "Life is what happens when you're busy making other plans.",
  "a": "John Lennon",
  "h": "<blockquote>&ldquo;To create more positive results in your life, replace 'if only' with 'next time'.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"
}
```

## Cron Job Configuration

- **Service**: [Crono-job.org](https://cron-job.org/en/)
- **Schedule**: The cron job is set to trigger every day at 9 AM.
- **Cron Expression**: `0 9 * * *`

## Usage

1. **Subscribe**: Provide your email address to receive the daily quote.
2. **Enjoy**: Get your inspirational quote delivered to your inbox at 9 AM every day.

## Example

### How the email will look:
**Subject**: Your Daily Quote

**Body**:
> "Life is what happens when you're busy making other plans."  
> — John Lennon

---

For more information, visit [ZenQuotes.io](https://zenquotes.io) for more quotes and inspiration.
