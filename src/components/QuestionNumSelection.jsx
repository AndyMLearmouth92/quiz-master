export default function QuestionNumSelection({children, setApiRequest, setStage}) {
    function handleClick(){
      setApiRequest(children)
      setStage(2);
    }
  
    return (
      <button
        className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }