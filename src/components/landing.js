import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css"

function Landing() {
  return (
    <section className="landingPage">
      <div className="home">
        <h1 className="home-title">Quizton</h1> 
        <h2 className="home-description">Quizzes to test your Knowledge on Various Topics</h2>
        <Link to="/quiz/computer-science" className="start-quiz">Enter</Link>
      </div>
    </section>
  );
}

export default Landing;
