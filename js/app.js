        'use strict'
        
         var username = prompt('please enter your name');
         console.log ('please enter your name',username);
         var Mark = 0;
         
         
        
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
            Mark ++;
        }


        var Qustion2 = prompt('Did I take a Database course in HTU?');
        if (Qustion2.toLowerCase() === 'yes' || Qustion2.toLowerCase() === 'y' )
        {
            alert('Wow, Your Answer is Correct.');
            console.log('Wow, Your Answer is Correct.');
            Mark ++;
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
            Mark++;
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
            Mark++;
        }


        var Qustion5 = prompt('My Goal is to be successful Full Stack developer');
        if (Qustion5.toLowerCase() === 'yes' || Qustion5.toLowerCase() === 'y' )
        {
            alert('Wow, Your Answer is Correct.');
            console.log('Wow, Your Answer is Correct.');
            Mark++;
        }
        else if (Qustion5.toLowerCase() === 'no' || Qustion5.toLowerCase() === 'n')
        {
            alert('Oops! Your Aswer is Wrong.');
            console.log('Oops! Your Aswer is Wrong.')
        }

        
        
        // Lab 03 Code 

        var TimesNumber = 4;
       
    
            for(var i = 0 ; i < 4 ; i++)
            {
                var Qustion6 = prompt('How Many Times I Visit Dead Sea?');

                 if (parseInt(Qustion6) > TimesNumber)
                {
                    alert('Too High');
                    continue;
                    
                }

                else if (parseInt(Qustion6) < 4)
                {
                    alert('Too Low');
                    continue;
                    
                }

                else if (parseInt(Qustion6) === 4)
                {
                    alert("Your Answer is correct");
                    Mark++;
                    break;
                }
                
            }
            
            if(parseInt(Qustion6) !== 4)
            {
                alert("Your Answer is wrong, I visit Dead Sea"  + TimesNumber + " Times");
            }


           var color = ['red' , 'black' , 'grey' , 'brown'];
           

           for(var i = 0 ; i < 6 ; i++)
           {
            
            var Qustion7 = prompt('Name one of my Faverote colors');
            
               if(Qustion7.toLowerCase() === 'red' || Qustion7.toLowerCase() === 'black' || Qustion7.toLowerCase() === 'grey' || Qustion7.toLowerCase() === 'brown')
               {
                   Mark ++;
                   break;
               }

               else 
               {
                   alert('Please try again');
                   continue;
               }

           }
        

        alert('My Favarote Colors is:  ' + color  + ' ');
        alert ('Your total Score is : ' + Mark + ' out of 7. ');

        
        

      

        
        alert('Wlcome ' + username + ' in my website.');
        document.write('<p> </p>');

    