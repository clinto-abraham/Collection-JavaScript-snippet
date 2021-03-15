var tweet = prompt("Compose your tweet");
alert("you have written " + tweet.length + " characters" + "remaining characters : " + (160-tweetLength) + ". your message is " + tweet.slice(0,160));

alert(prompt("compose your tweet").slice(0,440));
