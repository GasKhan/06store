const functions = require('firebase-functions');

const hello = functions.https.onRequest((req, res) => {
  const sub = req.query.sub || 'World';

  res.send(`Hello ${sub}`);
});

module.exports.hello = hello;
