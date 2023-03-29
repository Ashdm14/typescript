"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var num = prompt('Enter the number: ');
function chkPrime(Num) {
    var checkFlag = true;
    for (var i = 2; i < Num; i++) {
        if (Num % i == 0) {
            checkFlag = false;
        }
    }
    return checkFlag;
}
var prime = chkPrime(num);
if (prime == true) {
    console.log('The number is prime');
}
else {
    console.log('Number is not prime');
}
