const request = require('request');
const argv = require('yargs').argv;
let apiKey = '3b0f2c6d6e3a838552785f4140119ad7';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    console.log('Report:', weather);
    let message = `It's ${weather.main.temp} degrees in
                   ${weather.name}!`;
    console.log(message);
  }
});
