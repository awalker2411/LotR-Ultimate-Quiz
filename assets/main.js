const clipBox = document.querySelector('#clipSpace');
const homeBtn = document.querySelector('#homeBtn');
const startBtn = document.getElementById('startQuizBtn');
const scoreBtn = document.querySelector('#scoreBtn');
const submitBtn = document.getElementById('submitBtn');

//All event listeners being assigned
document.addEventListener("DOMContentLoaded", function() {
    const randomIndex = Math.floor(Math.random() * movieClips.length);
    const clip = movieClips[randomIndex];

    clipBox.src = clip;
});
homeBtn.addEventListener('click', handleHomeEvent);
startBtn.addEventListener('click', handleStartEvent);
scoreBtn.addEventListener('click', handleScoreEvent);
submitBtn.addEventListener('click', handleSubmitEvent);
radioOne.addEventListener('click', handleRadioOneEvent);
radioTwo.addEventListener('click', handleRadioTwoEvent);
radioThree.addEventListener('click', handleRadioThreeEvent);
radioFour.addEventListener('click', handleRadioFourEvent);
userSubmitBtn.addEventListener('click', saveUserScore);



















































































