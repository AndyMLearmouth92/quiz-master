import AnswerButton from "./AnswerButton";
import Question from "./Question";

export default function QuestionOutcome({
  currentQuestion,
  questionNumber,
  answerOptions,
  quizLength,
}) {
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
                  handleClick={console.log("click")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* Open the modal using document.getElementById('ID').showModal() method */
}
