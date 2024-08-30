const axios = require('axios');

async function getRandomEmail() {
  try {
    const response = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
    const emailFull = response.data[0];
    const [emailPrefix, emailDomain] = emailFull.split('@');

    return [{"fullemail": emailFull, "email": emailPrefix, "domain": emailDomain}];
  } catch (error) {
    console.error('Error fetching random email:', error);
    throw error;
  }
}

module.exports = getRandomEmail;
