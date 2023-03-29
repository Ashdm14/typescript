"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var pi = 3.14;
var radius = prompt('Enter the radius : ');
function AreaCircle(rad) {
    var area = pi * rad * rad;
    return area;
}
//var Ar = AreaCircle(radius);
console.log('Area of circle is:', AreaCircle(radius));
