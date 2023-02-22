//Constructor function for User Scores
function UserScore(user, score, date) {
    this.user = user;
    this.score = score;
    this.date = date;
}

//Adding user scores to local storage
function addUserScore(user, score, date) {
    const newUserScore = new UserScore(user, score, date);
    let grabScores = JSON.parse(localStorage.getItem('allUserScores'));

    if(grabScores === null){
        grabScores = [];
    }
    grabScores.push(newUserScore);
    localStorage.setItem('allUserScores', JSON.stringify(grabScores));
}