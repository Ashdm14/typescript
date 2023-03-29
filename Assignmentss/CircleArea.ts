import * as promptSync from 'prompt-sync'

const prompt= promptSync();
const pi = 3.14;

var radius =prompt('Enter the radius : ' );
function AreaCircle(rad: number){
    var area = pi*rad*rad;
    return area;

}
//var Ar = AreaCircle(radius);
console.log('Area of circle is:', AreaCircle(radius));