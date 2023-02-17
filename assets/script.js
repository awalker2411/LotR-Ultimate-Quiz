const clipBox = document.querySelector('#clipSpace');

const movieClips = [
    "https://www.youtube.com/embed/hesOeiv_l7I?autoplay=1&mute=1", //Boromir and Aragorn in Lothlorien
    "https://www.youtube.com/embed/Rag_9J1ZC2g?autoplay=1&mute=1", //Gandalf 'White Shores' talk with Pippin
    "https://www.youtube.com/embed/_eY9PLAdU_I?autoplay=1&mute=1", //Track down Merry and Pippin
    "https://www.youtube.com/embed/FuEEiLOTfs4?autoplay=1&mute=1", //Siege of Minas Tirith Beginning
    "https://www.youtube.com/embed/ApUu1DA5HCs?autoplay=1&mute=1", //Black Gates Speech - Aragorn
    "https://www.youtube.com/embed/W7_c-R7i8F4?autoplay=1&mute=1", //No Man can kill Me
    "https://www.youtube.com/embed/9-t88EZkBLo?autoplay=1&mute=1", //Charge of the Rohirrim
    "https://www.youtube.com/embed/ruRRcSrLnF0?autoplay=1&mute=1", //Arwen saves Frodo from Nazguls
    "https://www.youtube.com/embed/hUS9Oy96YPQ?autoplay=1&mute=1", //Gandalf vs. Saruman
    "https://www.youtube.com/embed/3bReJswiMGM?autoplay=1&mute=1", //You Shall Not Pass
    "https://www.youtube.com/embed/k1U1c5hdKGU?autoplay=1&mute=1", //Sneaky Little Hobbitses
    "https://www.youtube.com/embed/FGrLrBYe_4U?autoplay=1&mute=1", //Helms Deep Battle Begins
    "https://www.youtube.com/embed/Cvr5Nf8eUpg?autoplay=1&mute=1", //Bilbo Birthday Disappearance
    "https://www.youtube.com/embed/VhCts2eBJus?autoplay=1&mute=1", //Weathertop
    "https://www.youtube.com/embed/Bypor4e04rg?autoplay=1&mute=1", //Council of the Ring
    "https://www.youtube.com/embed/dkXwYPd2ctk?autoplay=1&mute=1", //Cave Troll
    "https://www.youtube.com/embed/k0-C8TMl0M4?autoplay=1&mute=1", //Galadriel's Visions
    "https://www.youtube.com/embed/mpaQnkcLCvM?autoplay=1&mute=1", //Boromir's Sacrifice
    "https://www.youtube.com/embed/3H3MQooOLn4?autoplay=1&mute=1", //Sam goes with Frodo across the Anduin
    "https://www.youtube.com/embed/yW2tqYG1g4A?autoplay=1&mute=1", //Gollum attacks frodo and sam
    "https://www.youtube.com/embed/HML-oaJ6DB4?autoplay=1&mute=1", //Gandalf the White reveal
    "https://www.youtube.com/embed/gtEKXaUkQRI?autoplay=1&mute=1", //Gandalf heals Theoden
    "https://www.youtube.com/embed/dwbiMcbaqHE?autoplay=1&mute=1", //Warg rider battle
    "https://www.youtube.com/embed/lKGXHy1zjsc?autoplay=1&mute=1", //Legolas, kill him
    "https://www.youtube.com/embed/dJUNMTFZslk?autoplay=1&mute=1", //The Horn of Helm Hammerhand
    "https://www.youtube.com/embed/A8clCP2VvaM?autoplay=1&mute=1", //Ents attack Isengard
    "https://www.youtube.com/embed/lKSKJZ-XdAk?autoplay=1&mute=1", //King of the Dead
    "https://www.youtube.com/embed/JSKcFHvriG0?autoplay=1&mute=1", //Sam fights Shelob
    "https://www.youtube.com/embed/BO5wdW5gk0U?autoplay=1&mute=1", //Denethor burns
    "https://www.youtube.com/embed/b9gQ-gqVWp4?autoplay=1&mute=1", //Legolas takes down the Oliphaunt
    "https://www.youtube.com/embed/7curfSGOhPI?autoplay=1&mute=1", //Gollum vs Frodo
    "https://www.youtube.com/embed/0wgkg3-bMEA?autoplay=1&mute=1", //Ring is destroyed
    "https://www.youtube.com/embed/EFlB9AENWGs?autoplay=1&mute=1", //Aragorn Coranation

];

document.addEventListener("DOMContentLoaded", function() {
    const randomIndex = Math.floor(Math.random() * movieClips.length);
    const clip = movieClips[randomIndex];

    clipBox.src = clip;

});
























const questionsArray = [];

function Questions(question, answerOne, answerTwo, answerThree, answerFour, correctAnswer) {
    this.question = question;
    this.answerOne = answerOne;
    this.answerTwo = answerTwo;
    this.answerThree = answerThree;
    this.answerFour = answerFour;
    this.correctAnswer = correctAnswer;
}

function addQuestions(question, answerOne, answerTwo, answerThree, answerFour, correctAnswer){
    const newQuestion = new Questions(question, answerOne, answerTwo, answerThree, answerFour, correctAnswer);
    questionsArray.push(newQuestion);
}


addQuestions(`Who says to Aragorn in Balin's tomb: "We should leave here, we cannot linger"?`, `Legolas`, `Gimli`, `Boromir`, `Gandalf`, 'Legolas');
addQuestions(`What's the English translation of the Elvish "Hannon Le"?`, 'Hello Friend', 'Thank you', "You're Welcome", 'Be safe', 'Thank you');
addQuestions(`What is Gimli's final head count of the enemy he kills at Helm's Deep?`, 'Forty', 'Forty-three', 'Forty-five', 'Fifty', 'Forty-three');
addQuestions('Which two of the Fellowship are last to cross the perilous broken stairs in Moria?', 'Frodo & Sam', 'Merry & Pippin', 'Frodo & Aragorn', 'Boromir & Legolas', 'Frodo & Aragorn');
addQuestions(`According to Frodo, what is Gandalf's official label in Hobbiton?`, 'The Grey Stranger', 'The Tall Wanderer', 'A Fireworks Wizard', 'A Disturber of the Peace', 'A Disturber of the Peace');
addQuestions(`Who proclaims to be the wielder of the flame of Anor?`, 'Gandalf', 'Elrond', 'Saruman', 'Aragorn', 'Gandalf');
addQuestions(`What city's archives does Gandalf use to research the history of the One Ring?`, 'Edoras', 'Rivendell', 'Minas Tirith', 'Osgiliath', 'Minas Tirith');
addQuestions(`Which hobbit says that he doesn't usually like foreign food?`, 'Merry', 'Pippin', 'Frodo', 'Sam', 'Sam');
addQuestions(`What wielder of the sword Narsil was killed by Sauron in an epic Second Age battle?`, 'Isildur', 'Elendil', 'Theodred', 'Arathorn', 'Elendil');
addQuestions(`Who calls Pippin a "Fool of a Took" for being noisy in Balin's tomb?`, 'Frodo', 'Merry', 'Gandalf', 'Aragorn', 'Gandalf');
addQuestions(`What are the children begging Gandalf to see as his cart rolls by in Hobbiton?`, 'His staff', 'His hat', 'His magic', 'His fireworks', 'His fireworks');
addQuestions(`Who tells Aragorn "You did what I could not," which was resisting the Ring's draw?`, 'Boromir', 'Gimli', 'Legolas', 'Faramir', 'Boromir');
addQuestions(`Who says before a charge: "Now for wrath, now for ruin and the red dawn"?`, 'Theoden', 'Eomer', 'Aragorn', 'Faramir', 'Theoden');
addQuestions(`Who in the Fellowship carries the Horn of Gondor?`, 'Aragorn', 'Boromir', 'Faramir', 'Gandalf', 'Boromir');
addQuestions(`What weapon is Theoden wounded by at Helm's Deep?`, 'A sword', 'An axe', 'A spear', 'An arrow', 'A spear');
addQuestions(`Which race's destruction does Aragorn say Saruman's army has been bred for?`, `Dwarves'`, `Elves'`, `Hobbits'`, `Men's`, `Men's`);
addQuestions(`How many years did the Ring "pass out of knowledge" following the death of Isildur?`, 'One-and-a-half thousand years', 'Two-and-a-half thousand years', 'Three-and-a-half thousand years', 'Four-and-a-half thousand years', 'Two-and-a-half thousand years');
addQuestions(`What sounds did the Dwarves hear before the Moria attack according to Balin's journal?`, 'Drums', 'Screams', 'Growls', 'Trumpets', 'Drums');
addQuestions(`Who says at the Council of the Ring: "Gondor has no king, Gondor needs no king"?`, 'Faramir', 'Aragorn', 'Boromir', 'Elrond', 'Boromir');
addQuestions(`Who tells the Fellowship near Lothlorien that Galadriel is waiting for them?`, 'Gandalf', 'Aragorn', 'Celeborn', 'Haldir', 'Haldir');
addQuestions(`What sight outside of Mordor prompts Sam to exclaim, "Oh, save us"?`, 'The Black Gate', 'Easterlings', 'Oliphaunts', 'Trolls', 'The Black Gate');
addQuestions(`What Hobbit makes the puzzling remark: "The closer we are to danger, the farther away we are from harm"?`, 'Merry', 'Pippin', 'Frodo', 'Sam', 'Pippin');
addQuestions(`Who does Boromir restrain from reentering the mines after the Fellowship escapes Moria?`, 'Aragorn', 'Frodo', 'Gimli', 'Legolas', 'Gimli');
addQuestions(`How many Farthings is the Shire divided into?`, 'Two', 'Three', 'Four', 'Five', 'Four');
addQuestions(`What title does Frodo bestow on Sam as a character in one of the "great stories" about the Ring?`, 'Samwise the Kind', 'Samwise the Strong', 'Samewise the Bold', 'Samewise the Brave', 'Samewise the Brave');
addQuestions(`Where was Isildur ambushed when he lost the One Ring?`, 'Gladden Fields', 'Osgiliath', 'Bree', 'The Black Gate', 'Gladden Fields');
addQuestions(`What's the name of the creature that Legolas says one of the Mearas?`, 'Hasufel', 'Shadowfax', 'Brego', 'Arod', 'Shadowfax');
addQuestions(`Who swears he'll be dead before he sees the Ring in the hands of an Elf?`, 'Gandalf', 'Boromir', 'Denethor', 'Gimli', 'Gimli');
addQuestions(`Who says to Frodo when joining the Fellowship: "If by my life or death I can protect you, I will"?`, 'Aragorn', 'Gimli', 'Legolas', 'Boromir', 'Aragorn');
addQuestions(`How many Elven Rings of Power were there?`, 'One', 'Three', 'Seven', 'Nine', 'Three');







const introCard = document.getElementById('introCard');
const quizCard = document.getElementById('quizCard');
const startBtn = document.getElementById('startQuizBtn');
const questionSpace = document.getElementById('questionSpace');
const answerOne = document.getElementById('answerOne');
const radioOne = document.getElementById('flexRadioDefault1')
const answerTwo = document.getElementById('answerTwo');
const radioTwo = document.getElementById('flexRadioDefault2')
const answerThree = document.getElementById('answerThree');
const radioThree = document.getElementById('flexRadioDefault3')
const answerFour = document.getElementById('answerFour');
const radioFour = document.getElementById('flexRadioDefault4')
const submitBtn = document.getElementById('submitBtn');
const timer = document.querySelector('#timer');
let randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);
let answeredCorrectly = localStorage.getItem('answeredCorrectly')||0;
let answeredIncorrectly = localStorage.getItem('answeredIncorrectly')||0;
const usedQuestions = [];
console.log(randomQuestionIndex)


function handleStartEvent() {
    if(introCard.classList.contains('d-none')){
        return;
    }else{
        introCard.classList.add('d-none');
        quizCard.classList.remove('d-none');
    }

    questionSpace.innerHTML = questionsArray[randomQuestionIndex].question;
    answerOne.innerHTML = questionsArray[randomQuestionIndex].answerOne;
    answerTwo.innerHTML = questionsArray[randomQuestionIndex].answerTwo;
    answerThree.innerHTML = questionsArray[randomQuestionIndex].answerThree;
    answerFour.innerHTML = questionsArray[randomQuestionIndex].answerFour;

    localStorage.setItem('randomQuestionIndex', randomQuestionIndex);

    usedQuestions.push(randomQuestionIndex);

    setTimer(60);

}

function setTimer(time) {
    let timeRemaining = time;

    const timerInterval = setInterval(()=>{
        timeRemaining--;
        timer.textContent = timeRemaining;

        const penaltyCheck = setInterval(()=>{
            if(answeredIncorrectly > 0){
                timeRemaining-=5*answeredIncorrectly;
                answeredIncorrectly--;
            }
        },500)

        if(timeRemaining === 0) {
            clearInterval(timerInterval);
        }
    },1000)

}





function handleRadioOneEvent() {
    if(radioOne.classList.contains('checked')){
        return;
    }

    radioOne.classList.add('checked');
    radioTwo.classList.remove('checked');
    radioThree.classList.remove('checked');
    radioFour.classList.remove('checked');
}


function handleRadioTwoEvent() {
    if(radioTwo.classList.contains('checked')){
        return;
    }

    radioOne.classList.remove('checked');
    radioTwo.classList.add('checked');
    radioThree.classList.remove('checked');
    radioFour.classList.remove('checked');
}


function handleRadioThreeEvent() {
    if(radioThree.classList.contains('checked')){
        return;
    }

    radioOne.classList.remove('checked');
    radioTwo.classList.remove('checked');
    radioThree.classList.add('checked');
    radioFour.classList.remove('checked');
}


function handleRadioFourEvent() {
    if(radioFour.classList.contains('checked')){
        return;
    }

    radioOne.classList.remove('checked');
    radioTwo.classList.remove('checked');
    radioThree.classList.remove('checked');
    radioFour.classList.add('checked');
}


function handleSubmitEvent() {
    if(!radioOne.classList.contains('checked') && !radioTwo.classList.contains('checked') && !radioThree.classList.contains('checked') && !radioFour.classList.contains('checked')) {
        return;
    }
    let randomQuestionIndex;
    randomQuestionIndex = localStorage.getItem('randomQuestionIndex');

    let selectedAnswer = document.querySelector('.checked').nextElementSibling.textContent;

    if(selectedAnswer === questionsArray[randomQuestionIndex].correctAnswer){
        answeredCorrectly++;
        console.log('correct');
    }else{
        answeredIncorrectly++;
        console.log('incorrect');
    }
    
    randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);
    
    if(usedQuestions.includes(randomQuestionIndex)){
        while(usedQuestions.includes(randomQuestionIndex)){
            randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);
            break;
        }
    }

    document.querySelector('.checked').checked = false;

    radioOne.classList.remove('checked');
    radioTwo.classList.remove('checked');
    radioThree.classList.remove('checked');
    radioFour.classList.remove('checked');

    questionSpace.innerHTML = questionsArray[randomQuestionIndex].question;
    answerOne.innerHTML = questionsArray[randomQuestionIndex].answerOne;
    answerTwo.innerHTML = questionsArray[randomQuestionIndex].answerTwo;
    answerThree.innerHTML = questionsArray[randomQuestionIndex].answerThree;
    answerFour.innerHTML = questionsArray[randomQuestionIndex].answerFour;

    localStorage.setItem('randomQuestionIndex', randomQuestionIndex);

    usedQuestions.push(randomQuestionIndex);


}

startBtn.addEventListener('click', handleStartEvent);
submitBtn.addEventListener('click', handleSubmitEvent);
radioOne.addEventListener('click', handleRadioOneEvent);
radioTwo.addEventListener('click', handleRadioTwoEvent);
radioThree.addEventListener('click', handleRadioThreeEvent);
radioFour.addEventListener('click', handleRadioFourEvent);


















