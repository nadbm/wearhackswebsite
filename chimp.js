// Following this tutorial
// http://sam.ink/2013/collecting-emails-the-elegant-way-with-mailchimp/

var MailChimpAPI = require('mailchimp').MailChimpAPI;

var apiKey = '49c3747e396d2af60dc7b177548ee142-us8';

try { 
  var api = new MailChimpAPI(apiKey, { version : '2.0' });
} catch (error) {
  console.log(error.message);
}

exports.subscribe = function(req, res){

  if (req.param('email')=="" || !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(req.param('email'))) /* ' */ { 
    res.send("format error; email : '"+ req.param('email') + "';");
  } 
  else {
    api.call('lists', 'subscribe', { id: "cd655868cc", email: { email: req.param('email') } }, function (error, data) {
        if (error) {
          console.log(error.message);
          res.send("error_chimp");
        } else {
          console.log(JSON.stringify(data));
          res.send(JSON.stringify(data)); // Do something with your data!
        }
      });
  }
};
