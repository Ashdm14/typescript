class student{
    name: string;
    marks:number;
    age:number;
    city: string;
        constructor(N :string, M:number, A:number, C:string ){
            this.name =N;
            this.marks =M;
            this.age=A;
            this.city= C;

        }
    
display():void{
    
    console.log("Name of student : " +this.name);
    console.log("Name of marks : " +this.marks);
    console.log("Name of student : " +this.age);
    console.log("Name of student : " +this.city);
    
}



}
var obj1 = new student("Ashlesha",99,12,"ahmednagar");

obj1.display();