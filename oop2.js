var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.Pi = 3.14;
    }
    Circle.prototype.calculateArea = function () {
        var ans = 0;
        ans = this.Pi * this.Radius * this.Radius;
        return ans;
    };
    return Circle;
}());
var obj = new Circle(10.7);
var ret = 0;
console.log(ret);
