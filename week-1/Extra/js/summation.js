var summation = function (num) {
  
    acumulate=0
      for (let index = 0; index <= num; index++) {
          const element = index;
          acumulate+=element
      }
      return acumulate
    }
  console.log(summation(8))