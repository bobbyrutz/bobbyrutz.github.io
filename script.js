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

var warning = document.getElementById("noteWarning");
var noteOn = document.getElementById("note");
var start = document.querySelector(".startbutton");
var stop = document.querySelector(".stopbutton");
var mode = document.getElementById("mode");
var metronome = document.getElementById("metronome");
var counter = 0;
var timer;
var randomNote;
var randomNotePlus;
var correctMode;
var keyChoice;
var metroTimer;

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

function flashMetronome() {
  setInterval(function() {
        metronome.style.display = (metronome.style.display == 'none' ? '' : 'none');
     }, 1000);}

function change() {
  warning.textContent = "Notes in the Key of C";
  start.disabled = true;
  timer = setTimeout(change, 5000);
  randomNote = keyOfC[Math.floor(Math.random() * 7)];
  randomNotePlus = keyOfC.indexOf(randomNote) + 1;
  modeDisplay();
  flashMetronome();
  //////////////////////// ********original modeDisplay function*********
  // if (randomNotePlus === 1) {
  //     randomNotePlus = "Ionian (maj)";
  // } else if (randomNotePlus === 2) {
  //     randomNotePlus = "Dorian (min NAT 6)";
  // } else if (randomNotePlus === 3) {
  //     randomNotePlus = "Phrygian (min b 2nd)";
  // } else if (randomNotePlus === 4) {
  //     randomNotePlus = "Lydian (maj raised 4th)";
  // } else if (randomNotePlus === 5) {
  //     randomNotePlus = "Mixolydian (maj b 7th)";
  // } else if (randomNotePlus === 6) {
  //     randomNotePlus = "Aeolian (min)";
  // } else if (randomNotePlus === 7) {
  //     randomNotePlus = "Locrian (min b 2nd b 5th)";
  // }
  noteOn.textContent = randomNote;
  mode.textContent = randomNotePlus;
  counter++;
  if (counter >= keyOfC.length) {
      counter = 0;
  }
}

function stopNotes() {
    warning.textContent = "Press Start to Start. Press Stop to Stop.";
    noteOn.textContent = "";
    mode.textContent = "";
    clearTimeout(timer);
    start.disabled = false;
}

start.addEventListener("click", change);
stop.addEventListener("click", stopNotes);
