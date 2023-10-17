export default function QuestionNumSelection({children, setApiRequest, setWelcome}) {
    function handleClick(){
      setApiRequest(children)
      setWelcome(false);
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