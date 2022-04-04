
let intervalID1
let alarmSet
let timeRemaining

function prueba(){
  
  if (alarmSet >= 0) {
    //sonido
    console.log(alarmSet);

    if (alarmSet < 10) {
      //unidades menores de 10
      timeRemaining.textContent = "Time Remaining: 00:0" + alarmSet;
    } else if (alarmSet < 60) {
      //decenas menosres de 60
      timeRemaining.textContent = "Time Remaining: 00:" + alarmSet;
    } else if (alarmSet >= 60) {
      //decenas myores o igual a 60
      if (alarmSet / 60 < 10) {
        if (alarmSet % 60 < 10) {
          timeRemaining.textContent =
            "Time Remaining: " +
            "0" +
            Math.round(alarmSet / 60) +
            ":0" +
            (alarmSet % 60);
        } else {
          timeRemaining.textContent =
            "Time Remaining: " +
            Math.round(alarmSet / 60) +
            ":" +
            (alarmSet % 60);
        }
      } else {
        if (alarmSet % 60 < 10) {
          timeRemaining.textContent =
            "Time Remaining: " +
            Math.round(alarmSet / 60) +
            ":0" +
            (alarmSet % 60);
        } else {
          timeRemaining.textContent =
            "Time Remaining: " +
            Math.round(alarmSet / 60) +
            ":" +
            (alarmSet % 60);
        }
      }
    }
    alarmSet--;
  } else {
    //sonido
    timeRemaining.style.color="red"
    playAlarm();
  }
}
  



function setAlarm() {
  if (!intervalID1) {
    intervalID1 = setInterval(prueba, 1000,alarmSet = document.querySelector("#alarmSet").value, timeRemaining = document.querySelector("#timeRemaining"));
  }


}


function pauseAlarm(){
  clearInterval(intervalID1)
  intervalID1=null
  
  
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
