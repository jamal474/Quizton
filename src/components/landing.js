import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="landingPage">
      <div className="home">
        <h1 className="home-title">Quizton</h1>
        <h2 className="home-description">A quiz to test your Computer Science prowess</h2>
        <Link to="quiz" className="start-quiz">Start quiz</Link>
      </div>
    </section>
  );
}

export default Landing;
