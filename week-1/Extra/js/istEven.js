function testEven(n) {
    //Your awesome code here!
   
    if (n%2>0||(n*-1%2)>0) {
      
        console.log("the nuember is impar")
      return false
        
    }else{
        console.log("the number is par")
      return true

    
    }
}
    /* if ((n%2)>=0) {
        console.log("el numero es impar")
        
    } else if(){
        console.log("el numero es par")
        
    } */


console.log(testEven(1))