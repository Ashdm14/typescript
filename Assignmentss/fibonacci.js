"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var calculateValue = function (number) {
    if (number < 1) {
        return 0;
    }
    var a = 0;
    var b = 1;
    for (var i = 1; i < number; ++i) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
};
for (var n = 0; n < 10; ++n) {
    var value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
}
