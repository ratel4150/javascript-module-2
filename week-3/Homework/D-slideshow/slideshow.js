// Write your code here
images = [
  {
    id: 0,
    url: "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1507745329/content-items/002/103/797/guillem-h-pongiluppi-guillemhp-barcelona-future-3-original.jpg?1507745329",
  },
  {
    id: 1,
    url: "https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg",
  },
  {
    id: 2,
    url: "https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg",
  },
  {
    id: 3,
    url: "https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled-e1648037045335.jpg",
  },
];

function backButton() {
  let styles = window.getComputedStyle(img);
  let prueba = styles.backgroundImage;
  let url1 = prueba.slice(5, -2);
  let a = images[0].url.indexOf(url1);
  let b = images[1].url.indexOf(url1);
  let c = images[2].url.indexOf(url1);
  let d = images[3].url.indexOf(url1);
  if (a!=-1) {
      console.log("correcto");
      img.style.backgroundImage="url('"+images[3].url+"')"
  }if (b!=-1) {
    img.style.backgroundImage="url('"+images[0].url+"')"
      
  }if (c!=-1) {
    img.style.backgroundImage="url('"+images[1].url+"')"
  }if (d!=-1) {
    img.style.backgroundImage="url('"+images[2].url+"')"
  }

 
}
function forwardButton() {
    let styles = window.getComputedStyle(img);
  let prueba = styles.backgroundImage;
  let url1 = prueba.slice(5, -2);
  let a = images[0].url.indexOf(url1);
  let b = images[1].url.indexOf(url1);
  let c = images[2].url.indexOf(url1);
  let d = images[3].url.indexOf(url1);
  if (a!=-1) {
      console.log("correcto");
      img.style.backgroundImage="url('"+images[1].url+"')"
  }if (b!=-1) {
    img.style.backgroundImage="url('"+images[2].url+"')"
      
  }if (c!=-1) {
    img.style.backgroundImage="url('"+images[3].url+"')"
  }if (d!=-1) {
    img.style.backgroundImage="url('"+images[0].url+"')"
  }
}



let backInterval1
let forwardInterval1
function stopButton(){
    clearInterval(backInterval1)
    clearInterval(forwarInterval1)
}

function backInterval() {
    clearInterval(backInterval1)
   
    backInterval1=setInterval(backButton, 1000);
    
}

function forwarInterval() {
    
    clearInterval(forwarInterval1)
    forwardInterval1=setInterval(forwardButton, 1000);
}
let img = document.querySelector("img");


let autoBack = document.querySelector("input:nth-child(1)");
autoBack.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    backInterval()

    
  }

 
);

let back = document.querySelector("input:nth-child(2)");
back.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    backButton();
  }

 
);
let stop1 = document.querySelector("input:nth-child(3)");
stop1.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    stopButton()
  }

 
);

let forward = document.querySelector("input:nth-child(4)");
forward.addEventListener("click", (e) => {
  e.preventDefault();

  forwardButton();
});


let autoForwar=document.querySelector("input:nth-child(5)")
autoForwar.addEventListener("click",(e)=>{
    e.preventDefault()
    forwarInterval()

    
})
