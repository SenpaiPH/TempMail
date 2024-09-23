const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());

// Endpoint to send SMS
app.post('/send-sms', async (req, res) => {
  const { phoneNumber, message } = req.body;
  const apiKey = 'kHfQQlnqljrExj7KYsfTISrxcQ6QdbJbKSp5JuF6HzRa4nrCctsAwNSzfYyKFDpL'; // Replace with your actual API key
  const url = 'https://textflow.me/api/send-sms';

  try {
    const response = await axios.post(url, {
      phone_number: phoneNumber,
      text: message
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.response ? error.response.data : error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
