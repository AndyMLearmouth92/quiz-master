/* eslint-disable react/prop-types */
import { useState } from "react";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log(questionNumber);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  console.log(numCorrectAnswers);

  const currentQuestion = questions[questionNumber];
  // useEffect(() => {
  //   function getQuestions() {
  //     //Use template literal to change the number of questions and the difficulty
  //     fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
  //       .then((res) => res.json()) // parse response as JSON
  //       .then((data) => {
  //         console.log(data.results[0]);
  //       })
  //       .catch((err) => {
  //         console.log(`error ${err}`);
  //       });
  //   }
  //   getQuestions();
  // }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(public/images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content min-h-full min-w-full">
          <div className="max-w-xl">
            {questionNumber <= questions.length && currentQuestion ? (
              <QAContainer
                currentQuestion={currentQuestion}
                key={currentQuestion.questionText}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setNumCorrectAnswers={setNumCorrectAnswers}
                numCorrectAnswers={numCorrectAnswers}
              />
            ) : (
              <Result numCorrectAnswers={numCorrectAnswers} />
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
}) {
  console.log(currentQuestion);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-80 flex bg-slate-600">
      <div className="card-body flex">
        <Question
          currentQuestion={currentQuestion}
          questionNumber={questionNumber}
        />
        <div className="justify-center ">
          <div className="">
            {currentQuestion.answerOptions.map((answer) => {
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

function Question({ currentQuestion, questionNumber }) {
  return (
    <div className="mb-4">
      <h1 className="text-4xl mb-8">
        Question {questionNumber + 1} of {questions.length}
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
      className="btn btn-neutral btn-primary w-52 m-2 btn-answer"
      onClick={handleClick}
    >
      {answer.answerText}
    </button>
  );
}

function Result({ numCorrectAnswers }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-80 flex bg-slate-600">
      <div className="card-body flex">
        <h1 className="text-4xl mb-8">
          Well done you scored {numCorrectAnswers} / {questions.length}!
        </h1>
        <div className="justify-center ">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default App;
