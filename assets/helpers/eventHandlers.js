const introCard = document.getElementById('introCard');
const quizCard = document.getElementById('quizCard');
const scoresCard = document.querySelector('#scoresCard')
const scoresTitle = document.querySelector('#scoresTitle');
const questionSpace = document.getElementById('questionSpace');
const answerOne = document.getElementById('answerOne');
const radioOne = document.getElementById('flexRadioDefault1')
const answerTwo = document.getElementById('answerTwo');
const radioTwo = document.getElementById('flexRadioDefault2')
const answerThree = document.getElementById('answerThree');
const radioThree = document.getElementById('flexRadioDefault3')
const answerFour = document.getElementById('answerFour');
const radioFour = document.getElementById('flexRadioDefault4')
const timer = document.querySelector('#timer');
const quizEndCard = document.querySelector(`#quizEndCard`);
const username = document.querySelector(`#username`);
const userSubmitBtn = document.querySelector('#userSubmitBtn');
let randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);
let answeredCorrectly = localStorage.getItem('answeredCorrectly')||0;
let answeredIncorrectly = localStorage.getItem('answeredIncorrectly')||0;
let allUserScores = localStorage.getItem('allUserScores')||0;
const usedQuestions = [];


//Populates the quiz card when the quiz begins
function handleStartEvent() {
    if(!quizCard.classList.contains('d-none')){
        return;
    }else{
        introCard.classList.add('d-none');
        quizCard.classList.remove('d-none');
        scoresCard.classList.add('d-none');
    }

    radioOne.classList.remove('checked');
    radioTwo.classList.remove('checked');
    radioThree.classList.remove('checked');
    radioFour.classList.remove('checked');

    if(answeredCorrectly > 0){
        function resetAnsweredCorrectly(){
            answeredCorrectly--;

            if(answeredCorrectly > 0){
                resetAnsweredCorrectly();
            }
        }
        resetAnsweredCorrectly();
    }
    
    let randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);

    questionSpace.innerHTML = questionsArray[randomQuestionIndex].question;
    answerOne.innerHTML = questionsArray[randomQuestionIndex].answerOne;
    answerTwo.innerHTML = questionsArray[randomQuestionIndex].answerTwo;
    answerThree.innerHTML = questionsArray[randomQuestionIndex].answerThree;
    answerFour.innerHTML = questionsArray[randomQuestionIndex].answerFour;
    
    localStorage.setItem('randomQuestionIndex', randomQuestionIndex);
    
    if(usedQuestions.length > 0){
        usedQuestions.length = 0;
    }
    usedQuestions.push(randomQuestionIndex);

    //starts the time interval for the quiz and checks for time deductions from incorrectly answered questions
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
            
            if(timeRemaining === 0||timeRemaining < 0) {
                clearInterval(timerInterval);
                quizCard.classList.add(`d-none`);
                quizEndCard.classList.remove(`d-none`);
                if(userSubmitBtn.classList.contains('d-none')){
                    userSubmitBtn.classList.remove('d-none');
                }
                timer.textContent = `60`;
            }
        },1000)
        
    }

    setTimer(60);
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//populates the score card with relevant information
function handleScoreEvent() {
    if(!scoresCard.classList.contains('d-none')){
        return;
    }else{
        introCard.classList.add('d-none');
        quizCard.classList.add('d-none');
        quizEndCard.classList.add('d-none');
        scoresCard.classList.remove('d-none');
    }
    
    
    if(document.querySelector('#scoresList')){
        document.querySelector('#scoresList').remove();
    }
    
    
    const scoresCardContent = document.querySelector('#scoresCardContent');
    const checkScores = JSON.parse(localStorage.getItem('allUserScores'));

    if(checkScores.length === 0){
        scoresCardContent.innerHTML = "You haven't taken the LotR: Ultimate Quiz yet! Click the 'Start Quiz' button at the top of the page to begin!"
    }else{
        const grabScores = JSON.parse(localStorage.getItem('allUserScores'));

        const newList = document.createElement('ul')
        newList.setAttribute('id', 'scoresList');
        newList.classList.add('list-group');
        newList.classList.add('list-group-numbered');
        scoresTitle.parentNode.insertBefore(newList, scoresTitle.nextSibling);
        
        grabScores.forEach(function(userQuizInfo){
            const userContent = document.createElement('li');
            userContent.classList.add('list-group-item');
            userContent.innerHTML = `Username: `+userQuizInfo.user+` | Score: `+userQuizInfo.score+` | `+userQuizInfo.date;
            newList.appendChild(userContent);
        })
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Shows radio buttons 'checked' when clicked on during the quiz
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Handles a user submiting an answer to the present quiz question
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
        function getNewQuestion() {
            randomQuestionIndex = Math.floor(Math.random() * questionsArray.length);
            if(usedQuestions.includes(randomQuestionIndex)){
                getNewQuestion();
            }
        }
        getNewQuestion();
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Handles someone clicking the main button to bring up the intro card
function handleHomeEvent(){
    if(!introCard.classList.contains('d-none')){
        return;
    }else{
        introCard.classList.remove('d-none');
        quizCard.classList.add('d-none');
        quizEndCard.classList.add('d-none');
        scoresCard.classList.add('d-none');
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Saves UserScore to local storage when sumbitted after a completion of quiz, and then presents the score card
function saveUserScore() {
    const usernameValue = username.value;
    
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const date = "Date: "+ day +", "+ month +", "+ year;
    
    addUserScore(usernameValue, answeredCorrectly, date);
    
    handleScoreEvent();
}