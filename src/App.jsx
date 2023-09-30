import { useEffect } from "react";

function App() {
  useEffect(() => {
    function getQuestions() {
      //Use template literal to change the number of questions and the difficulty
      fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data.results[0]);
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
    getQuestions();
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(public/images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
