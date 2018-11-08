// number of questions
var numQuestion = 10;

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var resetButton = document.getElementById('reset');

// shuffle by Fisher–Yates algorithm
for(i = myQuestions.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var tmp = myQuestions[i];
  myQuestions[i] = myQuestions[j];
  myQuestions[j] = tmp;
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<numQuestion; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">Q' + (i+1) + '. ' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
      if(document.forms.id_form.id_name.value === ""){
        // move to top of the page
        window.scrollTo(0,0);
        alert("Input your name.");
        return;
      }
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<numQuestion; i++){
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            
            // color the answers green
            answerContainers[i].style.color = 'green';
        
        // if answer is wrong or blank
        }else{
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
      }
      // show the comment
      var score = numCorrect/numQuestion * 100
      var comment;
      if(score === 100){
        comment = document.forms.id_form.id_name.value + ", you are EXCELLENT!!(^^♪";
      }else if(score >= 80){
        comment = "Very good(^^)b";
      }else if(score >= 60){
        comment = "Good.(^^)";
      }else{
        comment = "Let's try again＼(◎o◎)／！";
      }
      comment = '<div id="comment">' + comment + '</div>'
      // show number of correct answers out of total
      resultsContainer.innerHTML = "SCORE: " + score + "pt (" + numCorrect + " out of " + numQuestion + ")<br>" + comment + "<input type=\"hidden\" name=\"score\" value=" + score + ">";
    }

    function reset(){
      // move to top of the page
      window.scrollTo(0,0);
      // reset colour
      var elementsCount = document.formName.elements.length;
      var answerContainers = quizContainer.querySelectorAll('.answers');
      for (i = 0; i < numQuestion; i++) {
        answerContainers[i].style.color = 'black';
      }
      // reset radio button
      for (i = 0; i < elementsCount; i++) {
        document.formName.elements[i].checked = false;
        resultsContainer.innerHTML = "";
      }
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
    resetButton.onclick = function(){
        reset();
    }
} 