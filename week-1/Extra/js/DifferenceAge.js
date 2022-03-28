let ages=[82, 15, 6, 38, 35]

function differenceInAges(ages){

    let edadMinima=Math.min(...ages)
     
    let edadMaxima=Math.max(...ages)
    console.log(edadMinima)
    console.log(edadMaxima)
    a=ages.find(function(element){return element===edadMinima})
    b=ages.find(function(element){return element===edadMaxima})
    let diff=[a,b,b-a]
   
    return diff




}

console.log(differenceInAges(ages))