"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
function subtraction(no1, no2) {
    var ans = 0;
    ans = no1 - no2;
    return ans;
}
var a = parseInt(prompt("enter a"));
var b = parseInt(prompt("enter b"));
var ret = 0;
ret = addition(a, b);
console.log("addition is: " + ret);
ret = subtraction(a, b);
console.log("substraction is: " + ret);
