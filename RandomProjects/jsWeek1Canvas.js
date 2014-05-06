"use strict";

//var canvas = document.querySelector('canvas'),
//    ctx = canvas.getContext('2d');

var canvas = document.querySelector('canvas'),
       ctx = canvas.getContext('2d');


void setup()
{
    size(400,400);
    background(255);
    fill(255);
    noLoop();
    PFont fontA = loadFont("courier");
    textFont(fontA, 14);
}

void draw(){
    ctx.fillRect(200, 100, 300, 300);
    // Your Canvas Drawings from Khan Academy go HERE!
}

void setup()
{
    size(400,400); ---> Change this to the width and height you want
    noLoop();      ---> Change this to loop() with a lower case l if you have animation
}
void draw(){     ---> Change from var draw = function() {  on Khan Academy
    // Your Canvas Drawings from Khan Academy go HERE!
}