import React from 'react'
import Ques from './ques'

function Quiz() {

    const [allQtn,setAllQtn] = React.useState([]);
    const [marks,setMarks] = React.useState(Array(10));


    const url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple&encode=base64";
    React.useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllQtn(data))
    },[url])

    
    function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
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
            marks[k] = (event.target.getAttribute("value") === b64DecodeUnicode(dt2[k].correct_answer)) ? 1 : -1;
            
        }
        //console.log(marks[k]);
        //console.log(event.target.getAttribute("name"));
         //console.log(b64DecodeUnicode(dt2[0].correct_answer));
    }
    function checkAnswer()
        {
            console.log(Array.from(marks))
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
                // stAns = {stAns}
                // setStAns = {setStAns}
            />
        ));

        
        return (
            <div className = "quiz--pane">
                <div>
                    {quest}
                </div>
                <button className = "check-answer" onClick={checkAnswer}>Check answers</button>
            </div>
        )
    }
    return (
        <div>

        </div>
    )

    
}

export default Quiz;