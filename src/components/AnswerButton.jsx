export default function AnswerButton({
  answer,
  handleClick,
  stage,
  currentUserAnswer,
}) {
  // Conditional to set the style / colour coding of the buttons to show the correct answer and the user's answers.
  let style = {};
  if (stage === 3 && answer.isCorrect) {
    style = { backgroundColor: "green" };
  } else if (
    stage === 3 &&
    !currentUserAnswer.isCorrect &&
    answer === currentUserAnswer
  ) {
    style = { backgroundColor: "red" };
  }

  return (
    <button
      className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
      onClick={handleClick}
      style={style}
    >
      {answer.answerText}
    </button>
  );
}
