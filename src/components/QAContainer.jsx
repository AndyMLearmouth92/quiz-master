import AnswerButton from "./AnswerButton";
import Question from "./Question";

export default function QAContainer({
  currentQuestion, setQuestionNumber, setNumCorrectAnswers, questionNumber, answerOptions, quizLength,
}) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <Question
          currentQuestion={currentQuestion}
          questionNumber={questionNumber}
          quizLength={quizLength} />
        <div className="justify-center ">
          <div className="">
            {answerOptions.map((answer) => {
              return (
                <AnswerButton
                  answer={answer}
                  key={answer.answerText}
                  setQuestionNumber={setQuestionNumber}
                  setNumCorrectAnswers={setNumCorrectAnswers}
                  className="" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
