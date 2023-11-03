export default function AnswerButton({ answer, handleClick }) {
  return (
    <button
      className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
      onClick={handleClick}
    >
      {answer.answerText}
    </button>
  );
}
