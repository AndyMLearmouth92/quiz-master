import QuestionNumSelection from "./QuestionNumSelection"

export default function NumOfQuestions({ setApiRequest, setStage}){
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
        <div className="card-body flex">
          <div className="mb-4">
            <h1 className="text-5xl mb-8">Welcome to Quiz Master </h1>
            <h2 className="text-3xl">How many questions would you like to do?</h2>
          </div>
        <div className="justify-center">
          <div className="">
            <QuestionNumSelection setApiRequest={setApiRequest} setStage={setStage}>10</QuestionNumSelection>
            <QuestionNumSelection setApiRequest={setApiRequest} setStage={setStage}>20</QuestionNumSelection>
          </div>
        </div>
      </div>
      </div>
    );
  }