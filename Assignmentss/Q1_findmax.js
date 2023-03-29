"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var num1 = prompt('enter the 1st number : ');
var num2 = prompt('enter the 2nd number : ');
var num3 = prompt('enter the 3rd number : ');
var n1 = parseInt(num1);
var n2 = parseInt(num2);
var n3 = parseInt(num3);
var max = 0;
if (n1 > n2) {
    if (n1 > n3) {
        max = n1;
    }
}
else if (n2 > n3) {
    max = n2;
}
else {
    max = n3;
}
console.log('The maximum number is:', max);
