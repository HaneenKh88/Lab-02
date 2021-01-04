        'use strict'
        
         var username = prompt('please enter your name');
         console.log ('please enter your name',username);
         
         
        
        var Qustion1 = prompt('Did I graduated from Jordan University ?');
        if (Qustion1.toLowerCase() === 'yes' || Qustion1.toLowerCase() === 'y' )
        {
            alert('Oops! Your Aswer is Wrong.');
            console.log('Oops! Your Aswer is Wrong.');
        }
        else if (Qustion1.toLowerCase() === 'no' || Qustion1.toLowerCase() === 'n')
        {
            alert('Wow, Your Answer is Correct. Im graduated from Jordan University of Science and Technology.');
            console.log('Wow, Your Answer is Correct. Im graduated from Jordan University of Science and Technology.');
        }


        var Qustion2 = prompt('Did I take a Database course in HTU?');
        if (Qustion2.toLowerCase() === 'yes' || Qustion2.toLowerCase() === 'y' )
        {
            alert('Wow, Your Answer is Correct.');
            console.log('Wow, Your Answer is Correct.');
        }
        else if (Qustion2.toLowerCase() === 'no' || Qustion2.toLowerCase() === 'n')
        {
            alert('Oops! Your Aswer is Wrong.');
            console.log('Oops! Your Aswer is Wrong.');
        }

        var Qustion3 = prompt('Is my age 25 years old?');
        if (Qustion3.toLowerCase() === 'yes' || Qustion3.toLowerCase() === 'y' )
        {
            alert('Oops! Your Aswer is Wrong.');
            console.log('Oops! Your Aswer is Wrong.');
        }
        else if (Qustion3.toLowerCase() === 'no' || Qustion3.toLowerCase() === 'n')
        {
            alert('Wow, Your Answer is Correct. Im 24 years old.');
            console.log('Wow, Your Answer is Correct. Im 24 years old.')
        }


        var Qustion4 = prompt('Did my journey in the coding world starts with LTUC');
        if (Qustion4.toLowerCase() === 'yes' || Qustion4.toLowerCase() === 'y' )
        {
            alert('Oops! Your Aswer is Wrong.');
            console.log('Oops! Your Aswer is Wrong.')
        }
        else if (Qustion4.toLowerCase() === 'no' || Qustion4.toLowerCase() === 'n')
        {
            alert('Wow, Your Answer is Correct. my journey in the coding world starts with HTU.');
            console.log('Wow, Your Answer is Correct. my journey in the coding world starts with HTU.')
        }


        var Qustion5 = prompt('My Goal is to be successful Full Stack developer');
        if (Qustion5.toLowerCase() === 'yes' || Qustion5.toLowerCase() === 'y' )
        {
            alert('Wow, Your Answer is Correct.');
            console.log('Wow, Your Answer is Correct.')
        }
        else if (Qustion5.toLowerCase() === 'no' || Qustion5.toLowerCase() === 'n')
        {
            alert('Oops! Your Aswer is Wrong.');
            console.log('Oops! Your Aswer is Wrong.')
        }
        
        alert('Wlcome ' + username + ' in my website.');
        document.write('<p> </p>');

    