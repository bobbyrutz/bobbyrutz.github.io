var keyOfC =  ["C", "D", "E", "F", "G", "A", "B"];
var keyOfG =  ["G", "A", "B", "C", "D", "E", "F#"];
var keyOfD =  ["D", "E", "F#", "G", "A", "B", "C#"];
var keyOfA =  ["A", "B", "C#", "D", "E", "F#", "G#"];
var keyOfE =  ["E", "F#", "G#", "A", "B", "C#", "D#"];
var keyOfB =  ["B", "C#", "D#", "E", "F#", "G#", "A#"];
var keyOfF =  ["F", "G", "A", "Bb", "C", "D", "E"];
var keyOfGb = ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"];
var keyOfDb = ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"];
var keyOfAb = ["Ab", "Bb", "C", "Db", "Eb", "F", "G"];
var keyOfEb = ["Eb", "F", "G", "Ab", "Bb", "C", "D"];
var keyOfBb = ["Bb", "C", "D", "Eb", "F", "G", "A"];
var allKeys = [keyOfC, keyOfG, keyOfD, keyOfA, keyOfE, keyOfB,
               keyOfF, keyOfGb, keyOfDb, keyOfAb, keyOfEb, keyOfBb];

var keyNotes = ["A", "B", "C", "D", "E", "F", "G", "Ab", "Bb", "Cb",
                "Db", "Eb", "Gb", "A#", "C#", "D#", "F#", "G#"];
var notes = document.getElementById("noteList")
var warning = document.getElementById("noteWarning");
var noteOn = document.getElementById("note");
var buttonC = document.querySelector(".buttonC");
var buttonG = document.querySelector(".buttonG");
var buttonD = document.querySelector(".buttonD");
var buttonA = document.querySelector(".buttonA");
var buttonE = document.querySelector(".buttonE");
var buttonB = document.querySelector(".buttonB");
var buttonF = document.querySelector(".buttonF");
var buttonGb = document.querySelector(".buttonGb");
var buttonDb = document.querySelector(".buttonDb");
var buttonAb = document.querySelector(".buttonAb");
var buttonEb = document.querySelector(".buttonEb");
var buttonBb = document.querySelector(".buttonBb");

var start = document.querySelector(".startbutton");
var stop = document.querySelector(".stopbutton");
var random = document.querySelector(".randombutton");
var mode = document.getElementById("mode");
var metronome = document.getElementById("metronome");
var counter = 0;
var timer;
var correctMode;
var keyChoice;
var metroTimer;
var test;
var modeNumber;
// var key;

warning.textContent = "Press Start to Start. Press Stop to Stop.";

function modeDisplay() {
  if (randomNotePlus === 1) {
      randomNotePlus = "1 - Ionian (maj)";
  } else if (randomNotePlus === 2) {
      randomNotePlus = "2 - Dorian (min NAT 6)";
  } else if (randomNotePlus === 3) {
      randomNotePlus = "3 - Phrygian (min b 2nd)";
  } else if (randomNotePlus === 4) {
      randomNotePlus = "4 - Lydian (maj raised 4th)";
  } else if (randomNotePlus === 5) {
      randomNotePlus = "5 - Mixolydian (maj b 7th)";
  } else if (randomNotePlus === 6) {
      randomNotePlus = "6 - Aeolian (min)";
  } else if (randomNotePlus === 7) {
      randomNotePlus = "7 - Locrian (min b 2nd b 5th)";
  }
}

// function change() {
//   warning.textContent = "Notes in the Key of C";
//   start.disabled = true;
//   timer = setTimeout(change, 4000);
//   randomNote = keyOfC[Math.floor(Math.random() * 7)];
//   randomNotePlus = keyOfC.indexOf(randomNote) + 1;
//   modeDisplay();
//   noteOn.textContent = randomNote;
//   mode.textContent = randomNotePlus;
//   counter++;
//   if (counter >= keyOfC.length) {
//       counter = 0;
//   }
// }

function disabledKey() {
  var key = document.getElementsByClassName("key");
  for(var i = 0; i < key.length; i++) {
  key[i].disabled = true;
  }
  random.disabled = true;
}

function functionButtonC() {
  warning.textContent = "Notes in the Key of C";
  disabledKey();
  timer = setTimeout(functionButtonC, 4000);
  randomNote = keyOfC[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfC.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfC.length) {
      counter = 0;
  }
  noteList.textContent = keyOfC;

}
function functionButtonG() {
  warning.textContent = "Notes in the Key of G";
  disabledKey();
  buttonG.disabled = true;
  timer = setTimeout(functionButtonG, 4000);
  randomNote = keyOfG[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfG.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfG.length) {
      counter = 0;
  }
  noteList.textContent = keyOfG;

}
function functionButtonD() {
  warning.textContent = "Notes in the Key of D";
  disabledKey();
  buttonD.disabled = true;
  timer = setTimeout(functionButtonD, 4000);
  randomNote = keyOfD[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfD.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfD.length) {
      counter = 0;
  }
  noteList.textContent = keyOfD;

}
function functionButtonA() {
  warning.textContent = "Notes in the Key of A";
  disabledKey();
  buttonA.disabled = true;
  timer = setTimeout(functionButtonA, 4000);
  randomNote = keyOfA[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfA.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfA.length) {
      counter = 0;
  }
  noteList.textContent = keyOfA;

}
function functionButtonE() {
  warning.textContent = "Notes in the Key of E";
  disabledKey();
  buttonE.disabled = true;
  timer = setTimeout(functionButtonE, 4000);
  randomNote = keyOfE[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfE.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfE.length) {
      counter = 0;
  }
  noteList.textContent = keyOfE;

}
function functionButtonB() {
  warning.textContent = "Notes in the Key of B";
  disabledKey();
  buttonB.disabled = true;
  timer = setTimeout(functionButtonB, 4000);
  randomNote = keyOfB[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfB.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfB.length) {
      counter = 0;
  }
  noteList.textContent = keyOfB;

}
function functionButtonF() {
  warning.textContent = "Notes in the Key of F";
  disabledKey();
  buttonF.disabled = true;
  timer = setTimeout(functionButtonF, 4000);
  randomNote = keyOfF[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfF.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfF.length) {
      counter = 0;
  }
  noteList.textContent = keyOfF;

}
function functionButtonGb() {
  warning.textContent = "Notes in the Key of Gb";
  disabledKey();
  buttonGb.disabled = true;
  timer = setTimeout(functionButtonGb, 4000);
  randomNote = keyOfGb[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfGb.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfGb.length) {
      counter = 0;
  }
  noteList.textContent = keyOfGb;

}
function functionButtonDb() {
  warning.textContent = "Notes in the Key of Db";
  disabledKey();
  buttonDb.disabled = true;
  timer = setTimeout(functionButtonDb, 4000);
  randomNote = keyOfDb[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfDb.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfDb.length) {
      counter = 0;
  }
  noteList.textContent = keyOfDb;

}
function functionButtonAb() {
  warning.textContent = "Notes in the Key of Ab";
  disabledKey();
  buttonAb.disabled = true;
  timer = setTimeout(functionButtonAb, 4000);
  randomNote = keyOfAb[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfAb.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfAb.length) {
      counter = 0;
  }
  noteList.textContent = keyOfAb;

}
function functionButtonEb() {
  warning.textContent = "Notes in the Key of Eb";
  disabledKey();
  buttonEb.disabled = true;
  timer = setTimeout(functionButtonEb, 4000);
  randomNote = keyOfEb[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfEb.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfEb.length) {
      counter = 0;
  }
  noteList.textContent = keyOfEb;

}
function functionButtonBb() {
  warning.textContent = "Notes in the Key of Bb";
  disabledKey();
  buttonBb.disabled = true;
  timer = setTimeout(functionButtonBb, 4000);
  randomNote = keyOfBb[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfBb.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfBb.length) {
      counter = 0;
  }
  noteList.textContent = keyOfBb;
}

function randomize() {
  disabledKey();
  randomKey = allKeys[Math.floor(Math.random() * 12)];  //finds random key
  warning.textContent = "Notes in the key of " + randomKey[0];
}

function randomizer() {
  timer = setTimeout(randomizer, 4000);
  randomNote = randomKey[Math.floor(Math.random() * 7)]; //find random note in key
  randomNotePlus = randomKey.indexOf(randomNote) + 1;
  modeDisplay();
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= allKeys.length) {
    counter = 0;
  }
  noteList.textContent = randomKey;
}

function stopNotes() {
    warning.textContent = "Press Start to Start. Press Stop to Stop.";
    noteOn.textContent = "";
    mode.textContent = "";
    noteList.textContent = "";
    clearTimeout(timer);
    // start.disabled = false;
    random.disabled = false;
    buttonC.disabled = false;
    buttonG.disabled = false;
    buttonD.disabled = false;
    buttonA.disabled = false;
    buttonE.disabled = false;
    buttonB.disabled = false;
    buttonF.disabled = false;
    buttonGb.disabled = false;
    buttonDb.disabled = false;
    buttonAb.disabled = false;
    buttonEb.disabled = false;
    buttonBb.disabled = false;

}

// start.addEventListener("click", change);
stop.addEventListener("click", stopNotes);
random.addEventListener("click", function () {
  randomize();
  randomizer();
});
buttonC.addEventListener("click", functionButtonC);
buttonG.addEventListener("click", functionButtonG);
buttonD.addEventListener("click", functionButtonD);
buttonA.addEventListener("click", functionButtonA);
buttonE.addEventListener("click", functionButtonE);
buttonB.addEventListener("click", functionButtonB);
buttonF.addEventListener("click", functionButtonF);
buttonGb.addEventListener("click", functionButtonGb);
buttonDb.addEventListener("click", functionButtonDb);
buttonAb.addEventListener("click", functionButtonAb);
buttonEb.addEventListener("click", functionButtonEb);
buttonBb.addEventListener("click", functionButtonBb);
