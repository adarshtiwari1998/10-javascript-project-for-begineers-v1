const mathQuizData = [
    //object
       {
           question: "What is the approximate value of mathematical constant e?",
           a: "1.41",
           b: "2.72",
           c: "1.62",
           d: "3.14",
           correct: "b",
       },
       {
          question: "What's the square root of 49?",
          a: "9",
          b: "4",
          c: "12",
          d: "7",
          correct: "d",
      },
      {
          question: "The decimal number 31 in hexadecimal would be what?",
          a: "3D",
          b: "2E",
          c: "1B",
          d: "1F",
          correct: "d",
      },
      {
          question: "How many sides does a trapezium have?",
          a: "6",
          b: "4",
          c: "3",
          d: "5",
          correct: "b",
      },
      {
          question: "How many sides does a heptagon have?",
          a: "8",
          b: "7",
          c: "6",
          d: "5",
          correct: "b",
      },
      
  
  ];
  
  //target all of this
  const quizScore = document.getElementById("quiz");
  const questionEl = document.getElementById("question");
  const correctAnsEl = document.querySelectorAll(".correctAns"); 
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  //logic start here
  let currentQuiz = 0;
  let score = 0;
  //call this function every time when submit
  loadMathQuiz();
  
  //1. load the quiz
  function loadMathQuiz() {
      //call/ invoke deSelectedAnswers function here
       deSelectAnswers();
      const currentQuizData = mathQuizData[currentQuiz]
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
  } 
  
  //2. first: is to figure our if it is selected the option or not
  
  function getSelected() {
      // console.log(correctAns);
  
      let correctAns = undefined;
        correctAnsEl.forEach((correctAnsEl) => {
          // console.log(correctAns.checked);
          if(correctAnsEl.checked) {
              //store the answer
           correctAns = correctAnsEl.id;   //return answer element
          }
      });
      //if the user are not selected the answer so it can not be allowed to go to the next question
      return correctAns;
  }
  
  //3. deselected answer function before the next question appear and updated
  function deSelectAnswers() {
     correctAnsEl.forEach((correctAnsEl) => {
         correctAnsEl.checked = false;
      });
  }
  
  //6. submit 
  submitBtn.addEventListener("click", () => {
      //check to see the answer
      const correctAns = getSelected();
      console.log(correctAns);
     //check here, if we have an answer, so we want to increase the current quiz to 2 question and so on
      if (correctAns) {
      /* check if the answer is correct or not */
      if (correctAns === mathQuizData[currentQuiz].correct ) {
          score++
      }
      /*  loaded the next quiz question  */
         currentQuiz++;
       // console.log(currentQuiz);
       /*  next quiz question appear  */
      if(currentQuiz < mathQuizData.length) {
          loadMathQuiz();
      } else {
          // alert("Congrats! You finished the Math Quiz");
          // console.log(alert);
          quiz.innerHTML = `<h2>You Answered correctly ${score} out of ${mathQuizData.length} questions</h2>
          <button id="reload-btn" onclick="location.reload()">Reload</button>
          `
      }
      }
       
  })
  
  
  //1. first: is to figure our if it is selected the option or not
  //2. second: store selected answer when ever user click submit
  //3. one we changes we need to refresh , to move the selected answer
  //4 how we check see the answer is true or false
  //5. deselected the ansswer option before the next question are appear and updated