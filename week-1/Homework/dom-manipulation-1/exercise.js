/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
/* 1 */
let allTagP = document.querySelectorAll("p");
console.log(allTagP);
/* 2 */
let firstDiv = document.querySelector("div");
console.log(firstDiv);
/* 3 */
let jumboTronElement = document.querySelector("#jumbotron-text");
console.log(jumboTronElement);
/* 4 */
let divPrimaryContent = document
  .querySelector(".primary-content")
  .querySelectorAll("p");
console.log(divPrimaryContent);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
/* let changeColorPage=document.querySelector('#bgrChangeBtn')
changeColorPage.addEventListener("click",changeColor)
function changeColor() {
 let body=document.querySelector('body')
 if (body.style.backgroundColor!="lightgray") {
    body.style.backgroundColor="lightgray"
    alert("The background color of this page has been changed")
 } else {
    body.style.backgroundColor="white"
    
 }
    
    
} */
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
/* let addTextBtn=document.querySelector("#addTextBtn")
addTextBtn.addEventListener("click" ,addText)

function addText() {
    
    
    let paragraph = document.createElement("p");
    let article=document.querySelector(".article") 
    let paragraphArticle=document.querySelector(".article-lead")// we're just creating an element, it is not visible yet
    article.insertBefore(paragraph, paragraphArticle);
    paragraph.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia!"
    paragraph.style.color="red"
} */

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", largerLinks);

function largerLinks() {
  let bigLinks = document
    .querySelectorAll("a")
    .forEach((a) => (a.style.fontSize = "60px"));

  console.log(bigLinks);
}
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let cliCount = 0;
let addTextBtn6 = document.querySelector("#addTextBtn");
addTextBtn6.addEventListener("click", addParagraphAndRemove);

function addParagraphAndRemove(params) {
  cliCount += 1;
  if (cliCount === 1) {
    let paragraph = document.createElement("p");
    let article = document.querySelector(".article");
    let paragraphArticle = document.querySelector(".article-lead"); // we're just creating an element, it is not visible yet
    article.insertBefore(paragraph, paragraphArticle);
    paragraph.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia!";
    paragraph.style.color = "red";
  } else if (cliCount != 1) {
    cliCount = 0;
    let removeParagraph = document.querySelector(".article").querySelector("p");
    removeParagraph.remove();
  }
  {
  }
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
let clickCount1=0
let changeColorPage1 = document.querySelector("#bgrChangeBtn");
changeColorPage1.addEventListener("click", changeColor);

let colors = ["red", "blue", "pink", "green", "yellow"];

function changeColor() {
  let red = colors.filter(function (element) {
    let z = element === "red";
    return z;
  });
  let blue = colors.filter(function (element) {
    let z = element === "blue";
    return z;
  });
  let pink = colors.filter(function (element) {
    let z = element === "pink";
    return z;
  });
  let green = colors.filter(function (element) {
    let z = element === "green";
    return z;
  });
  let yellow = colors.filter(function (element) {
    let z = element === "yellow";
    return z;
  });

  console.log(red);
  let body = document.querySelector("body");
  clickCount1+=1
  if (clickCount1 === 1) {
      body.style.backgroundColor=red
      
      console.log(clickCount1);
  }if (clickCount1 === 2) {
    body.style.backgroundColor=blue
    
    console.log(clickCount1);
      
  }if (clickCount1 === 3) {
    body.style.backgroundColor=pink
    
    console.log(clickCount1);
      
  }if (clickCount1 === 4) {
    body.style.backgroundColor=green
    
    console.log(clickCount1);
      
  }if (clickCount1 === 5) {
    body.style.backgroundColor=yellow
    
    clickCount1=0
      
  }
  
  
  
  
}

