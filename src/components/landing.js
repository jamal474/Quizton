import React from "react";
import Quiz from "./quiz";
import {Link} from 'react-scroll'

function Landing() {
  return (
    <section className="landingPage">
      <div className="home">
        <h1 className="home-title">Quizton</h1>
        <h2 className="home-description">A quiz to test your maths prowess</h2>
        <Link to="quizPage" spy={true} smooth={true} offset={0} duration={500} className="start-quiz">Start quiz</Link>
      </div>
      <div className="landing_wave_01">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#16697A"
            fill-opacity="1"
            d="M0,96L26.7,101.3C53.3,107,107,117,160,138.7C213.3,160,267,192,320,192C373.3,192,427,160,480,176C533.3,192,587,256,640,266.7C693.3,277,747,235,800,186.7C853.3,139,907,85,960,64C1013.3,43,1067,53,1120,80C1173.3,107,1227,149,1280,149.3C1333.3,149,1387,107,1413,85.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="landing_wave_02">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fill-opacity="1"
            d="M0,96L26.7,85.3C53.3,75,107,53,160,53.3C213.3,53,267,75,320,69.3C373.3,64,427,32,480,53.3C533.3,75,587,149,640,176C693.3,203,747,181,800,160C853.3,139,907,117,960,128C1013.3,139,1067,181,1120,165.3C1173.3,149,1227,75,1280,48C1333.3,21,1387,43,1413,53.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Landing;
