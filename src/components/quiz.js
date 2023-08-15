import React from 'react'
import Ques from './ques'
import {Link} from 'react-scroll'
import decodeUriComponent from 'decode-uri-component';


function Quiz() {
    var d = new Date(); 
    const currentYear = d.getFullYear();
    
    //size of one questions page
    const size = 10;

    //list of all the questions fetched in one request turn
    const [allQtn,setAllQtn] = React.useState([]);

    //Keeps marks of all questions (index 0), and total at index 10
    const [marks,setMarks] = React.useState(Array(size + 1).fill(0));

    //to rerender when play again is clicked
    const [helpRender,setHelpRender] = React.useState(0);

    //to update rerender marks obtained in the popup
    const [helpRender2,setHelpRender2] = React.useState("");
    
    //using token we can fetch questions in bathces depending upon amound set in API request
    const urlToken = "https://opentdb.com/api_token.php?command=request"
    
    //limit for number of batches that can be requested as total question is 74 in the API
    let tokenLimit = 7;

    //token
    const [token,setToken]  = React.useState("");
    
    //keeps count of number of times we have already fetched new batches
    const [newTokenSteps,setNewTokenSteps] = React.useState(0);

    //to refetch new API token after all batch requests have been exhausted
    const [currIndex,setCurrIndex] = React.useState(0);

    //Fetch Token
    React.useEffect(() => {
        fetch(urlToken).then(res => res.json())
        .then(data => setToken(Array.from(Object.values(data))[2]))
    },[currIndex])
    
    //API request to fetch Questions
    const urlQuestion = "https://opentdb.com/api.php?amount=10&token=" + token + "&category=18&difficulty=medium&type=multiple&encode=url3986";

    //Fetch Questions
    React.useEffect(() => {
        setNewTokenSteps((ele) => {
            return ele + 1;
        });
        if(newTokenSteps === tokenLimit - 2)
        {
            setCurrIndex(ele => {
                return ele + 1;
            });
        }
        
        fetch(urlQuestion)
        .then(res => res.json())
        .then(data => setAllQtn((Array.from(Object.values(data)))[1]))
        .then(ptt => setAllQtn((ele) => {
            const newEle = ele.map((que) => {
            var options = [que.correct_answer];
            options = options.concat(que.incorrect_answers);
            options = options.sort(() => Math.random() - 0.5);
            return {...que, 'option': options}
            })
            return newEle;
        }))
    },[helpRender]);

    
    function decode(text)
    {
        return decodeUriComponent(text)
    }


    if(allQtn !== undefined)
    {
    
    //updates marks when a options is selected
    function updateMarks(event, select_c) 
    {
        let k = event.target.getAttribute("name");
        k = parseInt(k);
        if(allQtn[k] !== undefined)
        {
            if(Number.isNaN(select_c))
            {
                if(marks[k] === 1)
                {
                    marks[10]--;
                }
                marks[k] = 0;
                // console.log(Array.from(marks));
            }
            else
            { 
                if(marks[k] === 1)
                 {
                    marks[10]--;
                 }
                marks[k] = (event.target.getAttribute("value") === decode(allQtn[k].correct_answer)) ? 1 : 0;
                marks[10] = marks[10] + marks[k];
                // console.log(Array.from(marks));
            }
        }
    }

    //popup element when show score is clicked
    function showPopup()
    {
        setHelpRender2((Math.random()*100).toString());
        var page = document.getElementById("quiz-sheet");
        page.classList.toggle("blur");
        var popup = document.getElementById("popup");
        popup.classList.toggle("active");
    }

    //reloads and resets element when play again is clicked
    function reload()
    {
        showPopup();
        setHelpRender(Math.random()*100);
        setMarks(Array(size + 1).fill(0));
        
    }

        let id = 0;
    
        //returns jsx of questions
        const quest = allQtn.map((que) => {
            return (<Ques 
                key = {"question - " + id++}
                id = {id}
                question = {que.question}
                incorrect_answers = {que.incorrect_answers}
                correct_answer = {que.correct_answer}
                option = {que.option}
                updateMarks = {updateMarks}
            />)
        });
    
        return (
            <section className = "quizPage" id = "quizPage" >
                <div className = "header">Quizton</div>
                <div className = "quiz-p1" id = "quiz-sheet">
                    {quest}
                </div>
                <div id = "popup" >
                <div class="firework"></div>
                <div class="firework"></div>
                <div class="firework"></div>
                    <h2 className = {helpRender2} >You scored {marks[10]}/10 correct answers</h2>
                    <Link to="quizPage" spy={true} smooth={true} offset={-60} duration={500} onClick = {reload} className = "playAgain">Play again</Link>
                </div>
                <button className = "check-answer" onClick={showPopup}>Show Score</button>
                <div className = "rights">Made By Md Shabbir Jamal &copy; {currentYear} All Rights Reserved</div>
            </section>
        )
    }
}

export default Quiz;