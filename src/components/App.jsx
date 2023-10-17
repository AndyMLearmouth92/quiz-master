/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NumOfQuestions from "./NumOfQuestions"
import QAContainer from "./QAContainer";
import Result from "./Result";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [welcome, setWelcome] = useState(true)
  const [apiRequest, setApiRequest] = useState(10)
  const currentQuestion = quiz[questionNumber];
  
  useEffect(() => {
    function getQuestions() {
      fetch(`https://quiz-master-data.cyclic.cloud/questions/${apiRequest}`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          setQuiz(data);
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
    getQuestions();
  }, [apiRequest]);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content min-h-full min-w-full">
          <div className="max-w-xl">
            {welcome && (
            <NumOfQuestions welcome={welcome} setApiRequest={setApiRequest} setWelcome={setWelcome}/>
            )}
            {!welcome && (questionNumber <= quiz.length && currentQuestion ? (
              <QAContainer
                currentQuestion={currentQuestion}
                key={currentQuestion.question}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setNumCorrectAnswers={setNumCorrectAnswers}
                numCorrectAnswers={numCorrectAnswers}
                answerOptions={currentQuestion.answerOptions}
                quizLength={quiz.length}
              />
            ) : (
              <Result numCorrectAnswers={numCorrectAnswers} quiz={quiz} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
