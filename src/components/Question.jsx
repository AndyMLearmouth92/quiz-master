export default function Question({ currentQuestion, questionNumber, quizLength }) {
  return (
    <div className="mb-4">
      <h1 className="text-5xl mb-8">
        Question {questionNumber + 1} of {quizLength}
      </h1>
      <h2 className="text-3xl">{currentQuestion.questionText}</h2>
    </div>
  );
}
