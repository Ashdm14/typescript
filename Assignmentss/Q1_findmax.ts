import * as promptSync from 'prompt-sync'

const prompt = promptSync();
const num1 = prompt('enter the 1st number : ')
const num2 = prompt('enter the 2nd number : ')
const num3 = prompt('enter the 3rd number : ')
const n1 = parseInt(num1)

const n2 = parseInt(num2)

const n3 = parseInt(num3)
var max=0;
if(n1>n2){
    if(n1>n3){
        max= n1;
    }
}
else if(n2>n3){
    max=n2;
}
else{
    max=n3;
}
console.log('The maximum number is:', max);


