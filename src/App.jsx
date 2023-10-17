/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log(questionNumber);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  console.log(numCorrectAnswers);
  const [quiz, setQuiz] = useState([]);
  const [welcome, setWelcome] = useState(true)
  const [apiRequest, setApiRequest] = useState(10)

  console.log(quiz);
  const currentQuestion = quiz[questionNumber];
  useEffect(() => {
    function getQuestions() {
      fetch(`https://quiz-master-data.cyclic.cloud/questions/${apiRequest}`)
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
  }, [apiRequest]);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(public/images/quizBackground.png)" }}
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

function NumOfQuestions({setApiRequest, setWelcome}){
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <div className="mb-4">
          <h1 className="text-5xl mb-8">Welcome to Quiz Master </h1>
          <h2 className="text-3xl">How many questions would you like to do?</h2>
        </div>
      <div className="justify-center">
        <div className="">
          <QuestionNumSelection setApiRequest={setApiRequest} setWelcome={setWelcome}>10</QuestionNumSelection>
          <QuestionNumSelection setApiRequest={setApiRequest} setWelcome={setWelcome}>20</QuestionNumSelection>
        </div>
      </div>
    </div>
    </div>
  );
}

function QuestionNumSelection({children, setApiRequest, setWelcome={setWelcome}}) {
  function handleClick(){
    setApiRequest(children)
    setWelcome(false);
  }

  return (
    <button
      className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
      onClick={handleClick}
    >
      {children}
    </button>
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
      <h1 className="text-5xl mb-8">
        Question {questionNumber + 1} of {quizLength}
      </h1>
      <h2 className="text-3xl">{currentQuestion.questionText}</h2>
    </div>
  );
}

function AnswerButton({ answer, setQuestionNumber, setNumCorrectAnswers }) {
  function handleClick() {
    setQuestionNumber((qn) => qn + 1);
    if (answer.isCorrect) {
      setNumCorrectAnswers((a) => a + 1);
    }
  }

  return (
    <button
      className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
      onClick={handleClick}
    >
      {answer.answerText}
    </button>
  );
}

function Result({ numCorrectAnswers, quiz }) {
  function handleClick(){
    window.location.reload();
}

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-80 flex bg-slate-600">
      <div className="card-body flex">
        <h1 className="text-5xl mb-8">
          Well done you scored {numCorrectAnswers} / {quiz.length}!
        </h1>
        <div>
          <button className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
            onClick={handleClick}>
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
