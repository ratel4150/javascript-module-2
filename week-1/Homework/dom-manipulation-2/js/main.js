/* Blue Button */
let blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", function () {
  let jumboTron = document.querySelector(".jumbotron");
  jumboTron.style.backgroundColor = "#588fbd";
  let donateButton = document.querySelector(".buttons").querySelector(".btn");
  donateButton.style.backgroundColor = "#ffa500";
  let donateVolunteer = document
    .querySelector(".buttons")
    .querySelector(".btn:nth-child(2)");
  donateVolunteer.style.backgroundColor = "black";
  donateVolunteer.style.color = "white";
});

/* Orange Button */
let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", function () {
  let jumboTron = document.querySelector(".jumbotron");
  jumboTron.style.backgroundColor = "#f0ad4e";
  let donateButton = document.querySelector(".buttons").querySelector(".btn");
  donateButton.style.backgroundColor = "#5751fd";
  let donateVolunteer = document
    .querySelector(".buttons")
    .querySelector(".btn:nth-child(2)");
  donateVolunteer.style.backgroundColor = "#31b0d5";
  donateVolunteer.style.color = "white";
});

/* Green Button */
let greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", function () {
  let jumboTron = document.querySelector(".jumbotron");
  jumboTron.style.backgroundColor = "#87ca8a";
  let donateButton = document.querySelector(".buttons").querySelector(".btn");
  donateButton.style.backgroundColor = "black";
  let donateVolunteer = document
    .querySelector(".buttons")
    .querySelector(".btn:nth-child(2)");
  donateVolunteer.style.backgroundColor = "#8c9c08";
});

/* Submit Button */

let submitBtn = document.querySelector("form").querySelector(".btn");

let addParagraph = (content, number) => {
  let label = document.createElement("label");
  let form = document
    .querySelector("form")
    .querySelector(".form-group:nth-child(" + number + ")");

  form.appendChild(label);
  label.style.color = "red";
  label.setAttribute("class", "validate");
  return (label.textContent = content);
};

let removeParagraph=(number)=>{
    let label=document.querySelector("form").querySelector(".form-group").querySelector("#validate:nth-child("+number+")")
    return label.remove()

}


let validateInput = () => {
  /* let p=document.querySelector("form").querySelector(".form-group").querySelector("#validate") */
  let label2=document.querySelector("form").querySelector(".form-group").querySelector(".validate")
  let exampleInputEmail1 = document.querySelector("#exampleInputEmail1");
  inputA = exampleInputEmail1.value;
  let exampleTextInput = document.querySelector("#example-text-input");
  inputB = exampleTextInput.value;
  let exampleTextarea = document.querySelector("#exampleTextarea");
  inputC = exampleTextarea.value;
  let A = inputA.length > 0;
  let B = inputB.length > 0;
  let C = inputC.length > 0;
  /*  logica no hay ningun campo valido A'B'C' */
  /* logica1 solo hay un campo valido A'B'C + A'BC' + AB'C' */
  /* logica2 solo hay 2 campos validos A'BC + AB'C + ABC' */
  /* logica3 todos los campos estan validos  ABC*/
  logica = !A && !B && !C;
  logica1 = (!A && !B && C) || (!A && B && !C) || (A && !B && !C);
  logica2 = (!A && B && C) || (A && !B && C) || (A && B && !C);
  logica3 = A && B && C;
  console.log(logica, " Esta es la logica 0");
  console.log(logica1, " Esta es la logica 1");
  console.log(logica2, " Esta es la logica 2");
  console.log(logica3, " Esta es la logica 3");

  if (logica === true) {
    exampleInputEmail1.style.backgroundColor = "red";
    exampleTextInput.style.backgroundColor = "red";

    exampleTextarea.style.backgroundColor = "red";
    addParagraph("* No has ingresado datos", 1);
    addParagraph("* No has ingresado datos", 2);
    addParagraph("* No has ingresado datos", 3);
    
  } else if (logica1 === true) {
   /* Esta es la logica del input numero 1 es verdadero AB'C' */
    /* Esta es la logica del input numero 2 es verdadero A'BC' */
    /* Esta es la logica del input numero 3 es verdadero A'B'C */
    let logicaInput1 = A && !B && !C;
    let logicaInput2 = !A && B && !C;
    let logicaInput3 = !A && !B && C;
    if (logicaInput1 === true) {
        
        if (inputA.includes("@")===true) {
            exampleInputEmail1.style.backgroundColor="white"
            exampleTextInput.style.backgroundColor = "red";
        exampleTextarea.style.backgroundColor = "red";
       
       
        console.log(label2);
           label2.remove()
        addParagraph("* Falta ingresar datos", 2);
        addParagraph("* Falta ingresar datos", 3);
       
        
        } else {
            exampleInputEmail1.style.backgroundColor = "red";
            exampleTextInput.style.backgroundColor = "red";
             exampleTextarea.style.backgroundColor = "red";
             addParagraph("* Formato de email no valido", 1);
        addParagraph("* Falta ingresar datos", 2);
        addParagraph("* Falta ingresar datos", 3);
            
        }
     
        
    
      
    } else if (logicaInput2 === true) {
        exampleInputEmail1.style.backgroundColor = "red";
      exampleTextarea.style.backgroundColor = "red";
      
      addParagraph("* Falta ingresar datos", 1);
      addParagraph("* Falta ingresar datos", 3);
    } else if (logicaInput3 === true) {
     
      exampleInputEmail1.style.backgroundColor = "red";
      exampleTextInput.style.backgroundColor = "red";
      addParagraph("* Falta ingresar datos", 1);
      addParagraph("* Falta ingresar datos", 2);
    }
  } else if (logica2 === true) {
       /* Esta es la logica de los inputsAB  es verdadero  ABC' */
       /* Esta es la logica de los inputsAC  es verdadero  AB'C */
       /* Esta es la logica de los inputsBC  es verdadero  A'BC */
       let inputsAB = A&&B&&!(C)
       let inputsAC = A&&!(B)&&C
       let inputsBC = !(A)&&B&&C
       if (inputsAB===true) {
        exampleInputEmail1.style.backgroundColor = "red";
        exampleTextInput.style.backgroundColor = "red";
        addParagraph("* Falta ingresar datos", 1);
        addParagraph("* Falta ingresar datos", 2);
    


           
       }else if (inputsAC===true) {
        exampleInputEmail1.style.backgroundColor = "red";
        exampleTextarea.style.backgroundColor = "red";
        addParagraph("* Falta ingresar datos", 1);
        addParagraph("* Falta ingresar datos", 3);
           
       } else if(inputsBC){
        exampleTextInput.style.backgroundColor = "red";
        exampleTextarea.style.backgroundColor = "red";
        addParagraph("* Falta ingresar datos", 2);
        addParagraph("* Falta ingresar datos", 3);
           
       }

    










  } else if (logica3 === true) {
    console.log(logica3, " Esta es la logica 3 prueba 2");
    exampleInputEmail1.style.backgroundColor = "white";
    exampleTextInput.style.backgroundColor = "white";

    exampleTextarea.style.backgroundColor = "white";
    alert("thank you for filling out the form");
  }
};
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  validateInput();
  
});
