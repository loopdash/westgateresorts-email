var fs = require('fs');
var path = require('path');
var mailgun = require('mailgun-js')({ apiKey: '', domain: 'mg.loopdash.com' });
var filepath = path.join(__dirname, 'westgateresorts.html');
var file = fs.readFileSync(filepath, 'utf8');

var data = {
  from: 'Loopdash <test@loopdash.com>',
  to: 'gary@loopdash.com',
  cc: ['michael@labelmaker.nyc', 'samantha@labelmaker.nyc'],
  subject: 'Westgate Resorts',
  html: file,
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
