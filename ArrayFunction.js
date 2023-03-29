function Addition(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < week.length; cnt++) {
        sum = sum + week[cnt];
    }
    return sum;
}
var week = [10, 20, 30, 40, 50];
var ret = Addition(week);
console.log("Addition is " + ret);
