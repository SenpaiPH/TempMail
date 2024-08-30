const express = require('express');
const getRandomEmail = require('./getRandomEmail');
const getAllEmailMsg = require('./getAllEmailMsg');
const app = express();

app.get('/random-email', async (req, res) => {
  try {
    const emailData = await getRandomEmail();
    res.json(emailData[0]);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error generating random email' });
  }
});
app.get('/all-emails', async (req, res) => {
  try {
    const { login, domain } = req.query; // or req.body, depending on how you want to pass the parameters
    const emailData = await getAllEmailMsg(login, domain);
    res.json(emailData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching all emails' });
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
