const questionsArray = [

  //question 0
  {
    questionText: 'What is the first name of the founder of Slytherin? ',
    questionChoice: ['Salazar', 'Sly', 'Sonny ', 'Sltherino'],
    solution: 'Salazar',
    questionAnswer: 0,

  },
  //question 1
  {
    questionText: 'What is the name of the poltergeist that terrorizes the inhabitants of Hogwarts?',
    questionChoice: ['David ', 'Sybal', 'Peeves', 'Wormtail'],
    solution: 'Peeves',
    questionAnswer: 2,

  },
  //question 2
  {
    questionText: 'What is the name of Hermionies Cat?',
    questionChoice: ['Cindy', 'Crookshanks', 'Wormtail', 'Harry'],
    solution: 'Crookshanks',
    questionAnswer: 1,

  },
  //question 3
  {
    questionText: 'Why did Voldemort split his soul into 7 parts?',
    questionChoice: ['7 was the first number that came to him', '7 was his lucky number', '7 is the most magical number', 'He liked to drink 7 and 7s'],
    solution: '7 is the most magical number',
    questionAnswer: 2,

  },
  //question 4
  {
    questionText: 'Who wrote history of magic?',
    questionChoice: ['Newt Scamander', 'Bathilda Bagshot', 'Simon Sellery', 'David Yahtes'],
    solution: 'Bathilda Bagshot',
    questionAnswer: 1,

  },
  //question 5
  {
    questionText: 'What timeframe does the Harry Potter series take place in? ',
    questionChoice: ['Now', '2000’s', '1970’s', '1990’s'],
    solution: '1990’s',
    questionAnswer: 3,
  },
  //question 6
  {
    questionText: 'What quidditch position did Harry’s father play when he was in school?',
    questionChoice: ['Chaser', 'Beater', 'Seeker', 'Keeper'],
    solution: 'Seeker',
    questionAnswer: 2,
  },
//question 7
  {
    questionText: 'New students need to learn the secrets of the castle. How many staircases does Hogwarts have?',
    questionChoice: ['142', '186', '190', '3'],
    solution: '142',
    questionAnswer: 0,
  },
  //question 8
    {
      questionText: 'What does OWL’s stand for?',
      questionChoice: ['Old Wizard Lost', 'Ordinary Wizarding Level', 'Owl', 'Old Western Lost'],
      solution: 'Ordinary Wizarding Level',
      questionAnswer: 1,
    },
    //question 9
      {
        questionText: 'What job does Harry get after school?',
        questionChoice: ['Auror', 'Shopkeeper', 'Minister of Magic', 'Bar Keeper'],
        solution: 'Auror',
        questionAnswer: 0,
      },

];

let currentQuestionNumber = 0;
let totalNumberOfQuestion = questionsArray.length;
let totalScore = 0


// Event listener to listen for a click on the Start Quiz button
function generateFirstQuestions() {
  $('#start-button').click(function() {
    $('.radio-item').show();
    $('#question').show();
    $('#button-submit').show();
    $('.start-screen').hide();
    $('.question-number').show();
    $('#question').text(questionsArray[currentQuestionNumber].questionText);
  })



}
//Event listener to listen for a click on the Next button
function nextQuestion() {
  $("#button-continue").click(function(event) {
    //console.log("Next button clicked");
    answersDisplay();
    $('.radio-item').show();
    $('#button-continue').hide();
    $('#button-submit').show();
    $('#correct-display').hide();
    $('#question').text(questionsArray[currentQuestionNumber].questionText);
  });

}

//Retake the test function
function retakeQuiz() {
  $('#try-again').click(function() {
    location.reload();
  });
}

//***************CORE FUNCTIONS**************
//Displays the answers and the question
function answersDisplay() {
  $('.question-number').text('Question Number: ' + (currentQuestionNumber + 1) + "/10");
  $('.radio-item').empty();
  $('.radio-item').focus();
  //console.log(totalNumberOfQuestion);
  if (currentQuestionNumber < totalNumberOfQuestion) {
    //Loops through the object array and appends the the form
    const amountOfAnswers = questionsArray[currentQuestionNumber].questionChoice.length;
    for (let i = 0; i < amountOfAnswers; i++) {

      $('.radio-item').append(
        `<input class='radio-item' type="radio" name='answer' tabindex ='0' value='${i}' required>${questionsArray[currentQuestionNumber].questionChoice[i]}<br />`
      );


    }
  } else {
    $('.question-form').hide();
    $('.question-buttons').hide();
    $('#try-again').show();
    $('.final-page').show();
    $('.question-number').hide();
    testForPass();
  }
  //console.log('answersDisplay ran');

}

//Displays the correct or incorect answer
function correctDisplay() {
    $('#correct-display').empty();
    $('#correct-display').show();
    var userGuess = $("input[name='answer']:checked").val();
    let correctAnswer = questionsArray[currentQuestionNumber].questionAnswer;
    let answerDispaly = questionsArray[currentQuestionNumber].solution;
    if (userGuess == correctAnswer) {
      $('#correct-display').show();
      $('#correct-display').append(
        `<h3>That is Correct!</h3>`
      );

    } else {
      $('#correct-display').append(
        `<h3>That is Incorrect! the correct answer is ${answerDispaly} </h3>`)
    }
    currentQuestionNumber++;
}

//Checks to see if an answer is selected then moves the app along
function submitAnswers() {
  $('#button-submit').on('click', function() {
    //if function will stop user from moving on without a guess
    if ($("input:radio[name='answer']").is(":checked")) {
      $('#button-continue').show();
      $('#button-submit').hide();
      $('#score-display').show();
      $('.radio-item').hide();
      correctDisplay();
    } else {

    }
  })
}

//Calculate the score fucntion
function calculateScore() {
  $('#button-submit').on('click', function() {
    //Get user input
    var userGuess = $("input[name='answer']:checked").val();
    let correctAnswer = questionsArray[currentQuestionNumber].questionAnswer;
    if (userGuess == correctAnswer) {
      //add totalScore by 1
      totalScore++;

    } else {

    };
  })
}
//Displays the current score
function displayScore() {
  $('#button-submit').on('click', function() {
    $('#score-display').empty();
    $('#score-display').append(
      `<h5>${totalScore} out of 10</h5>`
    );
  })
}
//passing score display
function testForPass(){
let passGrade = 7;
  if (totalScore >= passGrade) {
    $('.passed-test').show();
  }else {
    $('.failed-test').show();
  }
}



function handleHarryPotterQuiz() {
  $('.radio-item').hide();
  $('#question').hide();
  $('#button-submit').hide();
  $('#button-continue').hide();
  $('.final-page').hide();
  $('#score-display').hide();
  $('#try-again').hide();
  $('.question-number').hide();
  $('#correct-display').hide();
  $('.passed-test').hide();
  $('.failed-test').hide();
  calculateScore();
  generateFirstQuestions();
  submitAnswers();
  displayScore();
  answersDisplay();
  nextQuestion();
  retakeQuiz();
$('#start-button').click(function(event){
    event.preventDefault();
});
}


$(handleHarryPotterQuiz);
