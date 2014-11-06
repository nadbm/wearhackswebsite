// Following this tutorial
// http://sam.ink/2013/collecting-emails-the-elegant-way-with-mailchimp/

var MailChimpAPI = require('mailchimp').MailChimpAPI;

var apiKey = process.env.API_KEY;

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
    //api.call('lists', 'subscribe', { id: process.env.LIST_ID, email: { email: req.param('email') } }, function (error, data) {
    if (req.param('base') == 'main') {
    api.call('lists', 'subscribe', { id: process.env.LIST_ID, email: { email: req.param('email') } }, function (error, data) {
        if (error) {
          console.log(JSON.stringify(data));
          res.send("error "+error.message);
        } else {
          console.log(JSON.stringify(data));
          res.send(JSON.stringify(data)); // Do something with your data!
        }
      });
     }
     else if (req.param('base') == 'van') {
    api.call('lists', 'subscribe', { id: process.env.VAN_LIST_ID, email: { email: req.param('email') } }, function (error, data) {
        if (error) {
          console.log(JSON.stringify(data));
          res.send("error "+error.message);
        } else {
          console.log(JSON.stringify(data));
          res.send(JSON.stringify(data)); // Do something with your data!
        }
      });
     }

     else if (req.param('base') == 'tor') {
    api.call('lists', 'subscribe', { id: process.env.TOR_LIST_ID, email: { email: req.param('email') } }, function (error, data) {
        if (error) {
          console.log(JSON.stringify(data));
          res.send("error "+error.message);
        } else {
          console.log(JSON.stringify(data));
          res.send(JSON.stringify(data)); // Do something with your data!
        }
      });
     }

  }
};
