/* eslint-disable react/prop-types */
// import { useEffect } from "react";

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
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            {questions.map((question) => {
              return (
                <QAContainer question={question} key={question.questionText} />
              );
            })}
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

function QAContainer({ question }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        {/* <img
          src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        /> */}
      </figure>
      <div className="card-body">
        <Question question={question} key={question.questionText} />
        <div className="card-actions justify-end">
          {question.answerOptions.map((answer) => {
            return <AnswerButton answer={answer} key={answer.answerText} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Question({ question }) {
  return <h2 className="card-title">{question.questionText}</h2>;
}

function AnswerButton({ answer }) {
  return (
    <button className="btn btn-active btn-primary">{answer.answerText}</button>
  );
}

export default App;
