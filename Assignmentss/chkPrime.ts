import * as promptSync from 'prompt-sync'
const prompt = promptSync();

var num= prompt('Enter the number: ');
 function chkPrime(Num: number):boolean{
    var checkFlag :boolean =true;
    for(var i =2; i<Num;i++){
        if(Num % i == 0){
            checkFlag=false;
        }
        
    }
    
     return checkFlag;
    
 }
  
 var prime= chkPrime(num);
 if(prime==true){
 console.log('The number is prime');
}
 else{
    console.log('Number is not prime');
 }
