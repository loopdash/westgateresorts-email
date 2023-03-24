var fs = require('fs');
var path = require('path');
var mailgun = require('mailgun-js')({ apiKey: 'key-aad19c5d91483265bf55f0ed69b0283d', domain: 'mg.loopdash.com' });
var filepath = path.join(__dirname, 'westgateresorts-v10.html');
var file = fs.readFileSync(filepath, 'utf8');

var data = {
  from: 'Loopdash <test@loopdash.com>',
  to: 'gary@loopdash.com',
  cc: ['samantha@labelmaker.nyc'],
  subject: 'Westgate Resorts',
  html: file,
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
