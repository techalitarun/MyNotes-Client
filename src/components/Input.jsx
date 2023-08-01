import React, { useState} from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function Input(props) {
    const [viewForm,setViewForm]=useState(false);

    const [note,setNote] = useState({title:"",content:"",type:""});
    function handleNote(event){
        const {name,value} = event.target;
        setNote(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        });
    }

    function typeHandle(event){
        var clr="";
        const vl=event.target.value;
        const bCCh = "button.type-button#"+vl;

        if(vl==="health")
        {
            clr="rgb(112, 166, 31)";
            document.querySelector("button.type-button#career").style.background="skyblue";
            document.querySelector("button.type-button#personal").style.background="palevioletred";
        }
        else if(vl==="career")
        {
            clr="rgb(84, 128, 146)";
            document.querySelector("button.type-button#health").style.background="greenyellow";
            document.querySelector("button.type-button#personal").style.background="palevioletred";
        }
            
        else if(vl==="personal")
        {
            clr="rgb(145, 76, 99)";
            document.querySelector("button.type-button#health").style.background="greenyellow";
            document.querySelector("button.type-button#career").style.background="skyblue";
        }

        document.querySelector(bCCh).style.background=clr;
        event.preventDefault();
        handleNote(event);
    }
    //useEffect(()=>{console.log("Note Added")},[note]); 
    

    async function onSubmit(event){
        event.preventDefault();
        await props.onAdd(note);
        setNote({title:"",content:"",type:""});
        document.querySelector("button.type-button#health").style="";
        document.querySelector("button.type-button#career").style="";
        document.querySelector("button.type-button#personal").style="";
    }

    function handleDummy() {
        setViewForm(true);
    }


    return (
        <div>
            <form className={!viewForm ? "create-note" : "inp-hidden create-note"}>
                <textarea onClick={handleDummy} placeholder="Take a Note..." rows="1"></textarea>
            </form>
            <form className={viewForm ? "create-note" : "inp-hidden create-note"}>
                <input onChange={handleNote} name="title" type="text" placeholder="Title..." value={note.title}></input>
                <br></br>
                <textarea onChange={handleNote} name="content" placeholder="Take a Note..." rows="3" value={note.content}></textarea>
                <button onClick={typeHandle} name="type" value="health" className="type-button" id="health" type="submit"></button>
                <button onClick={typeHandle} name="type" value="career" className="type-button" id="career" type="submit"></button>
                <button onClick={typeHandle} name="type" value="personal" className="type-button" id="personal" type="submit"></button>
                <Zoom in={viewForm ? true : false}><Fab onClick={onSubmit} type="submit"><AddOutlinedIcon/></Fab></Zoom>
            </form>
        </div>
    )
}

export default Input;