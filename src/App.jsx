import React, { useEffect, useState } from "react";
import QuestionPage from "./components/QuestionPage";

function App() {
  const [data, setdata] = useState(null);
  const [counter, setcounter] = useState(0);

  const [playerPoints, setplayerPoints] = useState(0);


  const [question, setquestion] = useState(null);
  const [option1, setoption1] = useState(null);
  const [option2, setoption2] = useState(null);
  const [option3, setoption3] = useState(null);
  const [option4, setoption4] = useState(null);

  const handlerOptionClick = (event) => {
    if (counter < data.length - 1) {
      setcounter(counter + 1);}

    const choosed=event.target.innerText;
   if(choosed===data[counter].correctAnswer){
         setplayerPoints(playerPoints+1);
   }
  };
  useEffect(() => {
if(data){
  if (counter === data.length-1) {
    alert("Your score is " + playerPoints);
    console.log("Your score is ", playerPoints);
  }
}
  }, [playerPoints, counter]);


  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((rawData) => {
        setdata(rawData);
        changeQuestion(rawData, counter);
      });
  }, []);

  useEffect(() => {
    console.log(counter);
    if (data) {
      changeQuestion(data, counter);
    }
  }, [counter]);

  const changeQuestion = (data, counter) => {
    console.log(data, counter);
    let options = [
      ...data[counter].incorrectAnswers,
      data[counter].correctAnswer,
    ];

    //algrothim to suffle the array of options
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    shuffleArray(options);
    console.log("new aaray :", options);

    setquestion(data[counter].question.text);
    setoption1(options[0]);
    setoption2(options[1]);
    setoption3(options[2]);
    setoption4(options[3]);
    // setoption1(data[counter].incorrectAnswers[0]);
    // setoption2(data[counter].incorrectAnswers[1]);
    // setoption3(data[counter].incorrectAnswers[2]);
    // setoption4(data[counter].correctAnswer);
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <QuestionPage
          question={question}
          option1={option1}
          option2={option2}
          option3={option3}
          option4={option4}
          toggler={handlerOptionClick}
        ></QuestionPage>
      </div>
    </>
  );
}

export default App;
