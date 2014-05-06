"use strict";

//clothing is a method to keep things from the global scope - avoids namespace collisions

var myApp = {};
myApp.Tweets = [];
myApp.url = "http"
myApp.Tweet = function (message) {
    this.message = message;
    this.time = Date.now();
};

//myApp.something = function () {
//    //get response
//    data
//    //
//    //push to array
//};

//tools to put all things in one place together - anonomyous functions and variables


myApp.SendMessage = function () {
    var message = document.getElementById("message").value;
    //myApp.LastTweet = new myApp.Tweet(message);
    var tweet = new myApp.Tweet(message);
    //myApp.Ajax("POST", myApp.url, null, tweet);
    document.getElementById("message").value = "";
    
};

myApp.SendMessage = function () {

};

myApp.Ajax = function (method, URL, callback, data) {
    var request = new XMLHttpRequest();
    request.open(method, URL);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {

            if (callback) {
                callback(JSON.parse(this.response));

            }

        }
        else { console.log(this.response); }
    };

    request.onerror = function () {
        console.log(this.response);
    }
    if (data) {
        request.send(JSON.stringify(data));
    }
    else {
        request.send();
    }
};