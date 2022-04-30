/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/



var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
    setIntroduction:function(){
      return "Hi, my name is "+this.firstName+" "+this.lastName+". I am "+this.age+" years old, and work as a "+this.occupation+"."

    }
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
    setIntroduction:function(){
      return "Hi, my name is "+this.firstName+" "+this.lastName+". I am "+this.age+" years old, and work as a "+this.occupation+"."

    }
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
    setIntroduction:function(){
      return "Hi, my name is "+this.firstName+" "+this.lastName+". I am "+this.age+" years old, and work as a "+this.occupation+"."

    }
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
    setIntroduction:function(){
      return "Hi, my name is "+this.firstName+" "+this.lastName+". I am "+this.age+" years old, and work as a "+this.occupation+"."

    }
  },
];
writers.forEach(writer=>{
  console.log(writer.setIntroduction())
  
})

/* writers.forEach(writer => {

 
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
}); */

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/