var email_ans = require('./modules/Email');  // require module Email
var sms_ans = require('./modules/Sms')  ;    // require module Sms
var $ = require( "jquery" );                // require module jquery
const fsobj = require('fs');                // require module fs

console.log(email_ans());                   // print module Email

fsobj.readFile('./user.txt', 'utf8', function(err, data) {  // read file user.txt
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
console.log(sms_ans());                     // print module Sms
console.log($);                             // print module jquery