/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      },
      addSkill:function(skill){
        this.skills.push(skill)
        
      },
      addStudentLikes:function(){
        this.studentLikes+=1

      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      },
      addSkill:function(skill){
        this.skills.push(skill)
        
      },
      addStudentLikes:function(){
        this.studentLikes+=1
        
        
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      },
      addSkill:function(skill){
        this.skills.push(skill)
        
      },
      addStudentLikes:function(){
        this.studentLikes+=1
        
        
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      },
      addSkill:function(skill){
        this.skills.push(skill)
        
      },
      addStudentLikes:function(){
        this.studentLikes+=1
        
        
      }
  },

];

//YOUR CODE HERE
mentors.map((mentor)=>{
  console.log("Hi, my name is "+mentor.firstName +" "+ mentor.lastName+". I work in Barcelona and i know React.");
})
/* 2 */
mentors[0].addSkill("java")
console.log(mentors)
/* 3 */
function addSkill(mentors,newSkill){
  //your code here

  /* 4 */
  mentors.forEach((mentor)=>{
    
    console.log(mentor.skills)
    mentor.skills.push(newSkill)
    console.log(mentor.skills)
  })
}
console.log(addSkill(mentors,"java"))
/* 5 */
function removeSkill(mentors,newSkill){
  //your code here
  mentors.forEach((mentor)=>{
    
    console.log(mentor.skills)
    mentor.skills.pop(newSkill)
    console.log(mentor.skills)
  })
}

/* 6 */

function mentorWithMoreSkills() {

  let a=mentors.filter((mentor)=>{
     return mentor.firstName==="Antonio"
  }).map((mentor)=>{
    return mentor.skills
  })
  let b=mentors.filter((mentor)=>{
     return mentor.firstName==="Leo"
  }).map((mentor)=>{
    return mentor.skills
  })
  let c=mentors.filter((mentor)=>{
     return mentor.firstName==="John"
  }).map((mentor)=>{
    return mentor.skills
  })
  let d=mentors.filter((mentor)=>{
     return mentor.firstName==="Giorgio"
  }).map((mentor)=>{
    return mentor.skills
  })
 

  let z=Math.max(a[0].length,b[0].length,c[0].length,d[0].length)

 let r=mentors.filter((mentor)=>{
     return mentor.skills.length===z
  }).map((mentor)=>{
    return mentor.firstName
  })
  
return r

}

/* 8*/
function addAllStudentsLikes(){
  let a=mentors.forEach((mentor)=>{
    mentor.addStudentLikes()
  })
  return a
  }





