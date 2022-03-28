function removeEveryOther(arr){
    //your code here
        let newArray=[]
      for (let index = 0; index < arr.length; index+=2) {
          const element = arr[index];
          newArray.push(element)
          
      }
      return newArray
      
  }