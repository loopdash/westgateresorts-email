var fs = require('fs');
var path = require('path');
var mailgun = require('mailgun-js')({ apiKey: '', domain: '' });
var filepath = path.join(__dirname, 'westgateresorts-v10.html');
var file = fs.readFileSync(filepath, 'utf8');

var data = {
  from: 'test@loopdash.com',
  to: '',
  cc: '',
  subject: 'Westgate Resorts',
  html: file,
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
