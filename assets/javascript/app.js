var counter = 120;
var correctans = 0;
var incorrectans = 0;
var unansweredans = 0;

//Setting correct answers, incorrect answers, and unanswered answers variables

var rightAns = $('#right').text(correctans);
var wrongAns = $('#wrong').text(incorrectans);
var unAns = $('#unans').text(unansweredans);


var answer1 = $("input[name='lebron']:checked").val();
var answer2 = $("input[name='wiggins']:checked").val();
var answer3 = $("input[name='champ']:checked").val();
var answer4 = $("input[name='finals']:checked").val();
var answer5 = $("input[name='ming']:checked").val();
var answer6 = $("input[name='magic']:checked").val();
var answer7 = $("input[name='mostwins']:checked").val();

//Showing and hiding the three main sections: Start Content, Main Content, and Overall Results Content

$('#mainform').hide();
$('#startbutton').show();
$('#overallresults').hide();

function decreaseTimer(){
    
  counter -= 1;
  $('#timer').text(counter);

  if (counter == 0){

    answer1 = $("input[name='lebron']:checked").val();
    answer2 = $("input[name='wiggins']:checked").val();
    answer3 = $("input[name='champ']:checked").val();
    answer4 = $("input[name='finals']:checked").val();
    answer5 = $("input[name='ming']:checked").val();
    answer6 = $("input[name='magic']:checked").val();
    answer7 = $("input[name='mostwins']:checked").val();
    
    isItCorrect(answer1);
    isItCorrect(answer2);
    isItCorrect(answer3);
    isItCorrect(answer4);
    isItCorrect(answer5);
    isItCorrect(answer6);
    isItCorrect(answer7);

    $("input[type='submit']").attr('disabled', true);
    clearInterval(timer);

    $('#mainform').hide();
    $('#overallresults').show();
  }

}

function isItCorrect(a) {
  
  if (a == 'correct' ) {

  correctans ++;
  console.log("Correct value " + correctans);
  rightAns = $('#right').text(correctans);
  
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

  
//Start button functionality

$('#start').on('click', function(){

  //Showing and hiding divs

  $('#mainform').show();
    
  $('#startbutton').hide();

  $('#overallresults').hide();
  
  $('#timer').text(counter);
  
  
  //Function to decrease the counter(timer)
  decreaseTimer();

  var timer = setInterval(decreaseTimer, 1*1000);
  
  //Display timer
  $('#timer').text(counter);

    
  })

//Submit button functionality. What happens when you press the submit button
$("input[type='submit']").on('click', function(){

    
  rightAns = $('#right').text(correctans);
  wrongAns = $('#wrong').text(incorrectans);


  // Setting Variable for answer from all questions
    
  answer1 = $("input[name='lebron']:checked").val();
  answer2 = $("input[name='wiggins']:checked").val();
  answer3 = $("input[name='champ']:checked").val();
  answer4 = $("input[name='finals']:checked").val();
  answer5 = $("input[name='ming']:checked").val();
  answer6 = $("input[name='magic']:checked").val();
  answer7 = $("input[name='mostwins']:checked").val();

  //Checking what are the right answers

  isItCorrect(answer1);
  isItCorrect(answer2);
  isItCorrect(answer3);
  isItCorrect(answer4);
  isItCorrect(answer5);
  isItCorrect(answer6);
  isItCorrect(answer7);

  //Show Overall results, Hide the two other sections
    
  $('#mainform').hide();
  $('#overallresults').show();  

  event.preventDefault();
    
  })

  
  