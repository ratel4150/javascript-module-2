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

let alertButton=document.querySelector('#alertBtn')
alertButton.addEventListener("click",alertSomething)

function alertSomething() {
    alert("Thanks for visiting Bikes for Refugees!")
    
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColorPage=document.querySelector('#bgrChangeBtn')
changeColorPage.addEventListener("click",changeColor)
function changeColor() {
 let body=document.querySelector('body')
 if (body.style.backgroundColor!="lightgray") {
    body.style.backgroundColor="lightgray"
    alert("The background color of this page has been changed")
 } else {
    body.style.backgroundColor="white"
    
 }
    
    
}
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
let addTextBtn=document.querySelector("#addTextBtn")
addTextBtn.addEventListener("click" ,addText)

function addText() {
    /* .article */
    
    let paragraph = document.createElement("p");
    let article=document.querySelector(".article") 
    let paragraphArticle=document.querySelector(".article-lead")// we're just creating an element, it is not visible yet
    article.insertBefore(paragraph, paragraphArticle);
    paragraph.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia!"
    paragraph.style.color="red"
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
