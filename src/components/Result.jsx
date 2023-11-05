import { useState } from "react";
import QuestionOutcome from "./QuestionOutcome";

export default function Result({
  numCorrectAnswers,
  quiz,
  userAnswers,
  stage,
}) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  let resultMessage = "";
  if (numCorrectAnswers <= Math.floor(quiz.length / 2)) {
    resultMessage = "A bit more practice required, you scored";
  } else if (
    numCorrectAnswers > Math.floor(quiz.length / 2) &&
    numCorrectAnswers <= Math.floor(quiz.length / 1.5)
  ) {
    resultMessage = "Well done you scored";
  } else {
    resultMessage = "Well done you scored an excellent";
  }

  function handleClick() {
    window.location.reload();
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-80 flex bg-slate-600">
      <div className="card-body flex">
        <h1 className="text-5xl mb-8">
          {resultMessage} {numCorrectAnswers} / {quiz.length}!
        </h1>
        <div>
          {quiz.map((_, i) => {
            return (
              <div>
                <button
                  className="btn btn-neutral btn-primary m-2 btn-answer text-xl"
                  onClick={() => {
                    console.log(i, quiz[i]);
                    setSelectedQuestion(i);
                    document.getElementById("my_modal_1").showModal();
                  }}
                  style={
                    userAnswers[i].isCorrect === true
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "red" }
                  }
                >
                  Question {i + 1}
                </button>
              </div>
            );
          })}

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                <QuestionOutcome
                  currentQuestion={quiz[selectedQuestion]}
                  questionNumber={selectedQuestion}
                  answerOptions={quiz[selectedQuestion].answerOptions}
                  quizLength={quiz.length}
                  currentUserAnswer={userAnswers[selectedQuestion]}
                  stage={stage}
                />
              </h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <button
            className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
            onClick={handleClick}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
