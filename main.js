//node js implementation of API.AI

var apiai = require('apiai');

var app = apiai("b9e138bc07824040923b282406027ad1");

var request = app.textRequest('happiness',{
  sessionId: '1234abc'
});

request.on('response',function(response){
  console.log(response.result.fulfillment.speech);
});

request.on('error',function(error){
  console.log(error);
});

request.end();
