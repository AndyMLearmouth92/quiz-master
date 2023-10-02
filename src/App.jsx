/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log(questionNumber);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  console.log(numCorrectAnswers);
  const [quiz, setQuiz] = useState([]);

  console.log(quiz);
  const currentQuestion = quiz[questionNumber];
  useEffect(() => {
    function getQuestions() {
      fetch("https://quiz-master-data.cyclic.cloud/questions")
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          setQuiz(data);
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
    getQuestions();
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(public/images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content min-h-full min-w-full">
          <div className="max-w-xl">
            {questionNumber <= quiz.length && currentQuestion ? (
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
            )}

            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
            {/* <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function QAContainer({
  currentQuestion,
  setQuestionNumber,
  setNumCorrectAnswers,
  questionNumber,
  answerOptions,
  quizLength,
}) {
  console.log(currentQuestion);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <Question
          currentQuestion={currentQuestion}
          questionNumber={questionNumber}
          quizLength={quizLength}
        />
        <div className="justify-center ">
          <div className="">
            {answerOptions.map((answer) => {
              return (
                <AnswerButton
                  answer={answer}
                  key={answer.answerText}
                  setQuestionNumber={setQuestionNumber}
                  setNumCorrectAnswers={setNumCorrectAnswers}
                  className=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Question({ currentQuestion, questionNumber, quizLength }) {
  return (
    <div className="mb-4">
      <h1 className="text-4xl mb-8">
        Question {questionNumber + 1} of {quizLength}
      </h1>
      <h2 className="text-2xl">{currentQuestion.questionText}</h2>
    </div>
  );
}

function AnswerButton({ answer, setQuestionNumber, setNumCorrectAnswers }) {
  function handleClick() {
    console.log(answer.isCorrect);
    setQuestionNumber((qn) => qn + 1);
    if (answer.isCorrect) {
      setNumCorrectAnswers((a) => a + 1);
    }
  }

  return (
    <button
      className="btn btn-neutral btn-primary w-52 m-2 btn-answer w-96"
      onClick={handleClick}
    >
      {answer.answerText}
    </button>
  );
}

function Result({ numCorrectAnswers, quiz }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-80 flex bg-slate-600">
      <div className="card-body flex">
        <h1 className="text-4xl mb-8">
          Well done you scored {numCorrectAnswers} / {quiz.length}!
        </h1>
        <div className="justify-center ">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default App;
