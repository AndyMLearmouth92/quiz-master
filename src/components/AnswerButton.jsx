

export default function AnswerButton({ answer, setQuestionNumber, setNumCorrectAnswers }) {
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
