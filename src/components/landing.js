import React from 'react'
import Quiz from './quiz'

function Landing() {
    const [nextScr,setNextScr] = React.useState(["landing","landing1","blob2"]);
    const [sliding,setSliding] = React.useState("pre-sliding");
    function handleClick() {
        setNextScr(
            ["landing","landing1","blob2-anim"]
        )
        setTimeout(() => {
            setSliding("sliding")
            setNextScr(["click-transition","landing1","blob2"]);
        },500)

        setTimeout(() => {
            setNextScr(["click-transition","click-transition1","blob2"]);
        },1000);
    }
    return (
        <div>
        <div className = {nextScr[0]}>
            <h1>Quizton</h1>
            <h2>A quiz to test your maths prowess</h2>
            <button 
            className = "quiz--button"
            onClick = {handleClick}
            >Start quiz</button>
            <div className = "blob1"></div>
            <div className = {nextScr[2]}></div>
        </div>
        <div className={sliding}>
        <div className = {nextScr[1]}>
            <Quiz/>
        </div>
        </div>
        </div>
    );
}

export default Landing;