'use strict'

var username = prompt('please enter your name');
console.log('please enter your name', username);
var Mark = 0;

guess('Did I graduated from Jordan University ?', 'Oops! Your Aswer is Wrong.', 'Wow, Your Answer is Correct. Im graduated from Jordan University of Science and Technology.')
guess('Did I take a Database course in HTU?', 'Wow, Your Answer is Correct.', 'Oops! Your Aswer is Wrong.')
guess('Is my age 25 years old?', 'Oops! Your Aswer is Wrong.', 'Wow, Your Answer is Correct. Im 24 years old.')
guess('Did my journey in the coding world starts with LTUC', 'Oops! Your Aswer is Wrong.', 'Wow, Your Answer is Correct. my journey in the coding world starts with HTU.')
guess('My Goal is to be successful Full Stack developer', 'Wow, Your Answer is Correct.', 'Oops! Your Aswer is Wrong.')
GuessingGame('How Many Times I Visit Dead Sea?')
GameArray('Name one of my Faverote colors')

function getuserinput(Message) {
    return prompt(Message);

}

function notify(getMessage) {

    return alert(getMessage);
}


function guess(Qustion, Message, Message2) {
    var Answer = getuserinput(Qustion);
    if (Answer.toLowerCase() === 'yes' || Answer.toLowerCase() === 'y') {
        notify(Message);
    }
    else if (Answer.toLowerCase() === 'no' || Answer.toLowerCase() === 'n') {
        notify(Message2);
        Mark++;
    }
}


function GuessingGame(Message) {
    var TimesNumber = 4;


    for (var i = 0; i < 4; i++) {
        var Qustion = getuserinput(Message);

        if (parseInt(Qustion) > TimesNumber) {
            notify('Too High');
            continue;

        }

        else if (parseInt(Qustion) < TimesNumber) {
            notify('Too Low');
            continue;

        }

        else if (parseInt(Qustion) === TimesNumber) {
            notify("Your Answer is correct");
            Mark++;
            break;
        }

    }
    if (parseInt(Qustion) !== TimesNumber) {
        notify("Your Answer is wrong, I visit Dead Sea " + TimesNumber + " Times");
    }

}

function GameArray(Message) {
    var color = ['red', 'black', 'grey', 'brown'];


    for (var i = 0; i < 6; i++) {

        var Qustion = getuserinput(Message);

        if (Qustion.toLowerCase() === 'red' || Qustion.toLowerCase() === 'black' || Qustion.toLowerCase() === 'grey' || Qustion.toLowerCase() === 'brown') {
            Mark++;
            break;
        }

        else {
            notify('Please try again');
            continue;
        }

    }
    return notify('My Favarote Colors is:  ' + color + ' ');
}

alert('Your total Score is : ' + Mark + ' out of 7. ');
alert('Wlcome ' + username + ' in my website.');
document.write('<p> </p>');