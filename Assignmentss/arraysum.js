"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var arr;
var size = prompt('enter the size of the array :');
var s = parseInt(size);
for (var i = 0; i < s; i++) {
    arr = prompt(i);
}
// for(var i = 0;i<arr.length;i++) {   
//     console.log(arr[i]);  
//  } 
