/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

/* task 1 */
/* const myTimeout = setTimeout(changeColor, 5000);

function changeColor() {
    let body=document.querySelector('body')
body.style.backgroundColor="red"

    
} */

/* task 2 */

/* function changeColorRed() {
    let body=document.querySelector('body')
body.style.backgroundColor="red"
}
function changeColorBlue() {
    let body=document.querySelector('body')
body.style.backgroundColor="blue"
}

function changeColorGreen() {
    let body=document.querySelector('body')
body.style.backgroundColor="green"
}

function changeColorOrange() {
    let body=document.querySelector('body')
body.style.backgroundColor="orange"
}
function changeColorPink() {
    let body=document.querySelector('body')
body.style.backgroundColor="pink"
}

const myTimeout = setTimeout(changeColorRed, 5000);

const myTimeout1 = setTimeout(changeColorBlue, 10000);

const myTimeout2 = setTimeout(changeColorGreen, 15000);

const myTimeout3 = setTimeout(changeColorOrange, 20000);

const myTimeout4 = setTimeout(changeColorPink, 25000);

 */

var index = 0;
function change() {
  var body = document.querySelector("body");
  var color = ["red", "blue", "pink", "green"];
  body.style.backgroundColor = color[index];
  index =(index+1)%5;
  console.log(index);
  
}
setInterval(change, 5000);






