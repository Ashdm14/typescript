import * as promptSync from 'prompt-sync'
const prompt= promptSync();

var arr: number[];

var size=prompt('enter the size of the array :' )
var s = parseInt(size);
for(var i=0; i< s; i++){
    arr =prompt(i);
}
for(var i = 0;i<arr.length;i++) {   
    console.log(arr[i]);  
 } 

