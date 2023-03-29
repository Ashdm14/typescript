import * as promptSync from 'prompt-sync'
const prompt=promptSync();


function addition(no1: number, no2:number): number{

    let ans: number =0;

    ans =no1+no2;
    return ans
}
function subtraction(no1: number, no2:number): number{

    let ans: number =0;
    ans =no1-no2;
    return ans
}

var a: number= parseInt(prompt("enter a"));
var b : number= parseInt(prompt("enter b"));
var ret: number=0;

ret= addition(a,b);
console.log("addition is: "+ ret);
ret= subtraction(a,b);
console.log("substraction is: "+ ret);
