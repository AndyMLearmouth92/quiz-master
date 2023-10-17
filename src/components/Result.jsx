export default function Result({ numCorrectAnswers, quiz }) {

  let resultMessage = '';
  if (numCorrectAnswers <= Math.floor(quiz.length / 2)) {
    resultMessage = 'A bit more practice required, you scored';
  } else if (numCorrectAnswers > Math.floor(quiz.length / 2) && numCorrectAnswers <= Math.floor(quiz.length / 1.5)) {
    resultMessage = 'Well done you scored';
  } else {
    resultMessage = 'Well done you scored an excellent';
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
          <button className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
            onClick={handleClick}>
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
