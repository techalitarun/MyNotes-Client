import React,{useState} from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Zoom from '@mui/material/Zoom';
import EditNote from "./EditNote"; 


function Note(props){

    const [toEdit,setToEdit]=useState(false);
    
    function viewForm(){
        setToEdit(prevValue=>!prevValue);
    }
    console.log(props.note.type);
    var noteColor="white";
    if(props.note.type==="health")
        noteColor="greenyellow";
    else if(props.note.type==="career")
        noteColor="skyblue";
    else if(props.note.type==="personal")
        noteColor="palevioletred";

    return (
        <div>
            <Zoom in={true}>
                <div style={{background:noteColor}} className={ toEdit?"inp-hidden":"note"}>
                    <h1>{props.note.title}</h1>
                    <p>{props.note.content}</p>
                    <button style={{background:noteColor}} className="edit" onClick={viewForm} type="submit"><EditOutlinedIcon fontSize="small"/></button>
                    <button style={{background:noteColor}} className="delete" onClick={()=>props.onDelete(props.note._id)} type="submit"><DeleteOutlineOutlinedIcon fontSize="small"/></button>
                </div>
            </Zoom>
            {toEdit && <EditNote noteUpdate={props.onUpdate} note={props.note} viewNote={viewForm}/>}
        </div>
    )
}

export default Note;