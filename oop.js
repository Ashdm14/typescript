var student = /** @class */ (function () {
    function student(N, M, A, C) {
        this.name = N;
        this.marks = M;
        this.age = A;
        this.city = C;
    }
    student.prototype.display = function () {
        console.log("Name of student : " + this.name);
        console.log("Name of marks : " + this.marks);
        console.log("Name of student : " + this.age);
        console.log("Name of student : " + this.city);
    };
    return student;
}());
var obj1 = new student("Ashlesha", 99, 12, "ahmednagar");
obj1.display();
