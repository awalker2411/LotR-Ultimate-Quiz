const questionsArray = []

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

console.log(questionsArray);