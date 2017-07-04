//Dependencies========================
var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

//HAPPY BOT=====================

//find latest tweet according the query 'q' in params

var retweet = function(){
  var params = {
    q: 'happiness',
    result_type: 'recent',
    lang: 'en'
  }
  Twitter.get('search/tweets',params, function(err,data){
    // If there is no errors
    if(!err){
      // grab ID of tweet to RETWEET
        var retweetId = data.statuses[0].id_str;
        //Tell Twitter to retweet
        Twitter.post('statuses/retweet/:id',{
          id: retweetId
        },function(err, response){
          if(response){
            console.log('Retweeted!!!');
          }
          //if there was an error while tweeting
          if(err){
            console.log('Somethign went wrong while RETWEETING--Duplicate tweet');
          }
        });
    }
    //if unable to search a tweeting
    else{
      console.log('Something went wrong while SEARCHING..');
    }
  });
}
//grab & retweet as soon as program is running....
retweet();
//retweet in every 10 minutes
setInterval(retweet, 600000);
// function to generate a random tweet tweet
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};
