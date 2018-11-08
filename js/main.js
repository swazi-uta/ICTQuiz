var myQuestions = [
    {
      question: "The physical components of a computer are called",
      answers: {
        a: "hard disk drive.",
        b: "hardware.",
        c: "microphone.",
        d: "software."
      },
      correctAnswer: "b",
      src: "2017May-June,qp11,Q1"
    },
    {
      question: "The device used to store data is called a",
      answers: {
        a: "hard disk drive.",
        b: "microphone.",
        c: "hardware.",
        d: "screen."
      },
      correctAnswer: "a",
      src: "2017May-June,qp11,Q1"
    },
    {
      question: "The device used to input sound is called a",
      answers: {
        a: "OCR.",
        b: "microphone.",
        c: "printer.",
        d: "scanner."
      },
      correctAnswer: "b",
      src: "2017May-June,qp11,Q1"
    },
    {
      question: "The programs and data of a computer are called",
      answers: {
        a: "speaker.",
        b: "virus.",   
        c: "OCR.",
        d: "software."
      },
      correctAnswer: "d",
      src: "2017May-June,qp11,Q1"
    },
    {
      question: "A portable hard drive is an example of internal memory.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "b",
      src: "2017May-June,qp11,Q3"
    },
    {
      question: "Magnetic tape is used to store backups of data.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "a",
      src: "2017May-June,qp11,Q3"
    },
    {
      question: "RAM is internal memory.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "a",
      src: "2017May-June,qp11,Q3"
    },
    {
      question: "ROM loses its data when the power is turned off.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "b",
      src: "2017May-June,qp11,Q3"
    },
    {
      question: "RAM loses its data when the power is turned off.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "a",
      src: "original"
    },
    {
      question: "The device used to output sound is called a",
      answers: {
        a: "speaker.",
        b: "printer.",
        c: "scanner.",
        d: "microphone."
      },
      correctAnswer: "a",
      src: "original"
    },
    {
      question: "A printer that uses resin to create solid objects",
      answers: {
        a: "Dot matrix printer",
        b: "Ink Jet printer",
        c: "Laser printer",
        d: "3D printer"
      },
      correctAnswer: "d",
      src: "2017Oct-Nov,qp11,Q1"
    },
    {
      question: "A printer that uses toner to transfer the print image to plain paper",
      answers: {
        a: "Dot matrix printer",
        b: "Ink Jet printer",
        c: "Laser printer",
        d: "3D printer"
      },
      correctAnswer: "c",
      src: "2017Oct-Nov,qp11,Q1"
    },
    {
      question: "A printer that sprays tiny droplets of ink directly onto the paper",
      answers: {
        a: "Dot matrix printer",
        b: "Ink Jet printer",
        c: "Laser printer",
        d: "3D printer"
      },
      correctAnswer: "b",
      src: "2017Oct-Nov,qp11,Q1"
    },
    {
      question: "A printer that prints by pressing metal pins against an ink ribbon onto the paper",
      answers: {
        a: "Dot matrix printer",
        b: "Ink Jet printer",
        c: "Laser printer",
        d: "3D printer"
      },
      correctAnswer: "a",
      src: "2017Oct-Nov,qp11,Q1"
    },
    {
      question: "A network device that learns which devices are connected to which ports is called",
      answers: {
        a: "a scanner.",
        b: "a router.",
        c: "a switch.",
        d: "a hub."
      },
      correctAnswer: "c",
      src: "2017Oct-Nov,qp11,Q2"
    },
    {
      question: "A network device that connects a LAN to another LAN using the same protocol is called",
      answers: {
        a: "a switch.",
        b: "a hub.",
        c: "a bridge.",
        d: "a router."
      },
      correctAnswer: "c",
      src: "2017Oct-Nov,qp11,Q2"
    },
    {
      question: "A network device that connects a LAN with the internet is called",
      answers: {
        a: "a bridge.",
        b: "a hub.",
        c: "a sensor.",
        d: "a router."
      },
      correctAnswer: "d",
      src: "2017Oct-Nov,qp11,Q2"
    },
    {
      question: "A network device which broadcasts data passing through it is called",
      answers: {
        a: "a bridge.",
        b: "a hub.",
        c: "a printer.",
        d: "a router."
      },
      correctAnswer: "b",
      src: "2017Oct-Nov,qp11,Q2"
    },
    {
      question: "Answers to multiple choice examination papers can be read using an Optical Mark Reader.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "a",
      src: "2017Oct-Nov,qp11,Q3"
    },
    {
      question: "MICR reads the information on a credit card.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "b",
      src: "2017Oct-Nov,qp11,Q3"
    },
    {
      question: "The chip on a credit card is read by a PIN reader.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "b",
      src: "2017Oct-Nov,qp11,Q3"
    },
    {
      question: "An RFID chip can be used to track stock.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "a",
      src: "2017Oct-Nov,qp11,Q3"
    },
    {
      question: "SSD is a kind of storage devices.",
      answers: {
        a: "True",
        b: "False",   
      },
      correctAnswer: "a",
      src: "original"
    }
];
console.log("<INFO>total number of questions is " + myQuestions.length + ".");

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