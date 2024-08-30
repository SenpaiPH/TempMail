const axios = require('axios');

async function fetchEmails(login, domain) {
  const apiUrl = 'https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}';

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching emails:', error);
    throw error;
  }
}

module.exports = fetchEmails;
