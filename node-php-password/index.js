var Password = require("node-php-password");

var hash = Password.hash("ftcc@dmin", "PASSWORD_DEFAULT");

console.log(hash);