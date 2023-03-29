"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
// var i=0;
var number = prompt('Enter the number: ');
function DisplayFactor(num) {
    //var fact=0;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            console.log(i);
    }
}
var Num = parseInt(number);
DisplayFactor(Num);
//console.log("factors are ", factor);
