let audioCtx = new AudioContext(); //webaudioAPI
let oscillator = audioCtx.createOscillator();
let gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.type = "sine";
gainNode.gain.value = 0; //starting silent
oscillator.start();

const startOscillator = function () {
  gainNode.gain.value = 1; //increase the gain
};

const stopOscillator = function () {
  gainNode.gain.value = 0;
};
document
  .getElementById("startButton")
  .addEventListener("click", startOscillator);
document.getElementById("stopButton").addEventListener("click", stopOscillator);

const updateFrequency = function (event) {
  oscillator.frequency.value = event.target.value;
};
const updateGain = function (event) {
  oscillator.frequency.value = event.target.value;
};

document
  .getElementById("freqSlider")
  .addEventListener("input", updateFrequency);
document.getElementById("gainSlider").addEventListener("input", updateGain);
