class Circle{
    Radius:number;
    Pi:number;

constructor(Data:number){
    this.Radius = Data;
    this.Pi=3.14;

}
calculateArea():number{
    let ans=0;
  
    ans = this.Pi * this.Radius * this.Radius;
    return ans;
}

}
var obj =new Circle(10.7);
var ret:number=0;
ret=obj.calculateArea();
 console.log(ret);