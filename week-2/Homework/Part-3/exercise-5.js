/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/
writers.forEach(writer => {
  for (let key in writer) {
      console.log(`${key}: ${writer[key]}`);
  }
});


var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

writers.forEach(writer => {
 
  for (let key in writer) {

      if(key==="firstName"){
        console.log("Hi my name is "+writer[key])
        
         }
  }
  for (let key in writer) {

      if(key==="lastName"){
        console.log(writer[key])
        
         }
  }
   for (let key in writer) {

      if(key==="age"){
        console.log("I am "+ writer[key] +" years old,")
        
         }
  }
   for (let key in writer) {

      if(key==="occupation"){
        console.log("and work as a "+ writer[key] )
        
         }
  }
  for (let key in writer) {

    if(key==="alive"){
      console.log( writer[key]+" the writers that are alive" )
      
       }
}
});

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/