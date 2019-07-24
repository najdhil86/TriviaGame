  //Showing and hiding the three main sections: Start Content, Main Content, and Overall Results Content

$('#mainform').hide();
$('#startbutton').show();
$('#overallresults').hide();
  

   $('#start').on('click', function(){

    $('#mainform').show();
    
    $('#startbutton').hide();

    $('#overallresults').hide();


    var counter = 10;
  
    $('#timer').text(counter);
  
    function decreaseTimer(){
    
      counter -= 1;
      $('#timer').text(counter);

      if (counter == 0){

      $("input[type='submit']").attr('disabled', true);
      clearInterval(timer);

      $('#mainform').hide();
      $('#overallresults').show();

      }
    
    }

    var timer = setInterval(decreaseTimer, 1*1000);
    
    $('#timer').text(counter);

    
  })

    //Setting correct answers, incorrect answers, and unanswered answers variables

    var correctans = 0;
    var rightAns = $('#right').text(correctans);

    var incorrectans = 0;
    var wrongAns = $('#wrong').text(incorrectans);
    
    var unansweredans = 0;
    var unAns = $('#unans').text(unansweredans);
  //Submit button functionality. What happens when you press the submit button

  $("input[type='submit']").on('click', function(){

    var correctans = 0;
    var rightAns = $('#right').text(correctans);
    

    var incorrectans = 0;
    var wrongAns = $('#wrong').text(incorrectans);


    // Setting Variable for answer from all questions
    
    var answer1 = $("input[name='lebron']:checked").val();

    var answer2 = $("input[name='wiggins']:checked").val();

    var answer3 = $("input[name='champ']:checked").val();

    var cAnsDisplay = $('')
    
    function isItCorrect(a) {

      if (a == 'correct' ) {

      correctans ++;
      console.log("Correct value " + correctans);
      rightAns = $('#right').text(correctans);
      //  debugger;
      } else if (a == undefined) {

        unansweredans ++;
        incorrectans++;
        unAns = $('#unans').text(unansweredans);
        wrongAns = $('#wrong').text(incorrectans);

      } else  {

        incorrectans ++;
        console.log("Incorrect value " + incorrectans);
        wrongAns = $('#wrong').text(incorrectans);
        // debugger;
      }

      
    }

    //Checking what are the right answers

    isItCorrect(answer1);
    isItCorrect(answer2);
    isItCorrect(answer3);

    //Show Overall results, Hide the two other sections
    
    // $('#mainform').hide();
    // $('#overallresults').show();  

    event.preventDefault();
    
  })

  
  