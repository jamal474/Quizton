import React from 'react'

function Ques(props) 
{
    const [stAns,setStAns] = React.useState(["op0","op1","op2","op3"]);
    function caller(event)
    {
        ClrC(event.target.className[2]);
        props.option_select(event);
    }
    
    function ClrC(et) 
    {
        let temp = parseInt(et);
        let arr = [];
        for(let i = 0; i < 4;i++)
        {
            if(i == temp)
            {
                arr[i] = "selected-option";
            }
            else
            {
                arr[i] = `op${i}`;
            }
        }
    
        setStAns(arr);
    }
    function b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
    return (
        <div className = "quiz">
            <h1 className = "question">{b64DecodeUnicode(props.question)}</h1>
            <div className = "option">
                <div className = {stAns[0]} onClick = {caller} name = {props.id} value = {b64DecodeUnicode(props.option[0])}>{b64DecodeUnicode(props.option[0])}</div>
                <div className = {stAns[1]} onClick = {caller} name = {props.id} value = {b64DecodeUnicode(props.option[1])}>{b64DecodeUnicode(props.option[1])}</div>
                <div className = {stAns[2]} onClick = {caller} name = {props.id} value = {b64DecodeUnicode(props.option[2])}>{b64DecodeUnicode(props.option[2])}</div>
                <div className = {stAns[3]} onClick = {caller} name = {props.id} value = {b64DecodeUnicode(props.option[3])}>{b64DecodeUnicode(props.option[3])}</div>
            </div>
        </div>
        
    )
}

export default Ques;