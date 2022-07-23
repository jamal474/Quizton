import React from 'react'
import Ques from './ques'

function Quiz() {

    const [allQtn,setAllQtn] = React.useState([]);
    const [marks,setMarks] = React.useState([0,0,0,0,0,0,0,0,0,0,0]);
    const [temp,setTemp] = React.useState("");
    const [temp2,setTemp2] = React.useState("");
    const url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple&encode=base64";
    React.useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllQtn(data))
    },[temp])

    
    function b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
    let [dt1,dt2] = Array.from(Object.values(allQtn));
    
    
    if(dt2 !== undefined)
    {

    function option_select(event) 
    {
        let k = event.target.getAttribute("name");
        if(dt2[k] != undefined)
        {
            if(marks[k] == 1)
            {
                marks[10]--;
            }
            marks[k] = (event.target.getAttribute("value") === b64DecodeUnicode(dt2[k].correct_answer)) ? 1 : 0;
            marks[10] = marks[10] + marks[k];
            console.log(Array.from(marks));
        }
    }
    function checkAnswer()
        {
            setTemp2((Math.random()*100).toString());
            var page = document.getElementById("quiz-sheet");
            page.classList.toggle("blur");
            var popup = document.getElementById("popup");
            popup.classList.toggle("active");
            
        }
    function reload()
    {
        setTemp((Math.random()*100).toString());
        setMarks([0,0,0,0,0,0,0,0,0,0,0]);
        setAllQtn([]);
    }
    
    dt2 = dt2.map((que) => 
    (
        {
            ...que,
            option : [que.correct_answer,...que.incorrect_answers]
        }
    )
    )
    for(let k = 0;k<10;k++)
    {
        for (let i = dt2[k].option.length - 1; i > 0; i--) 
        {
            const j = Math.floor(Math.random() * (i + 1));
            [dt2[k].option[i], dt2[k].option[j]] = [dt2[k].option[j], dt2[k].option[i]];
        }
    }
    
        let temp = 0;
        const quest = dt2.map((que) => (
            <Ques 
                key = {"question - " + temp++}
                id = {temp}
                question = {que.question}
                incorrect_answers = {que.incorrect_answers}
                correct_answer = {que.correct_answer}
                option = {que.option}
                option_select = {option_select}
            />
        ));

        
        return (
            <div className = "quiz-p2" >
                <div className = "quiz-p1" id = "quiz-sheet">
                    {quest}
                </div>
                <div id = "popup" >
                    <h2 className = {temp2}>You scored {marks[10]}/10 correct answers</h2>
                    <button onClick={reload}>Play again</button>
                </div>
                <button className = "check-answer" onClick={checkAnswer}>Check answers</button>
            </div>
        )
    }

    
}

export default Quiz;