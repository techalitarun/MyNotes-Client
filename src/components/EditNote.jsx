import React,{useState} from "react";
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

function EditNote(props){
    const [edit,setEdit]=useState({title:props.note.title,content:props.note.content});

    function handleEdit(event){
        const {name,value}=event.target;

        setEdit((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        });
    }

    function handleEditSubmit(event){
        event.preventDefault();
        props.noteUpdate(props.note._id,edit);
        props.viewNote();
    }

    var noteColor="white";
    if(props.note.type==="health")
        noteColor="greenyellow";
    else if(props.note.type==="career")
        noteColor="skyblue";
    else if(props.note.type==="personal")
        noteColor="palevioletred";

    return (
        <div style={{backgroundColor:noteColor}} className="note">
            <form className="edit-note">
                <input style={{fontSize:23,backgroundColor:noteColor}} onChange={handleEdit} type="text" name="title" value={edit.title} placeholder="Edit Title..."></input>
                <textarea style={{backgroundColor:noteColor}} onChange={handleEdit} rows="3" name="content" value={edit.content} placeholder="Edit note..."></textarea>
                <button style={{backgroundColor:noteColor}} onClick={handleEditSubmit} className="save" type="submit"><DoneOutlineOutlinedIcon fontSize="small"/></button>
            </form>
        </div>
    );
}

export default EditNote;