import axios from "axios";
import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import Input from "./Input";



function App(){ 

    const [notes,setNotes] = useState([]);
    const [flag,setFlag] = useState(0);

    if(flag===0)
    {
        axios.post("https://mynotes-server-mg5n.onrender.com/api",{})
        .then(async function(response){
            setNotes(response.data);
        })
        .catch(function(err){
            console.log(err);
        });
        setFlag(1);
    }
    
    
    async function addNote(note) {
        await (axios.post("https://mynotes-server-mg5n.onrender.com/api",note)
        .then(async function(response){
            setNotes(response.data);
        })
        .catch(function(err){
            console.log(err);
        }));
    }
    //useEffect(()=>{console.log("Note Added in notes")},[notes]); 
    

    async function deleteNote(id){
        console.log(id);
        const dltURL = "https://mynotes-server-mg5n.onrender.com/api/"+id;

        await axios.delete(dltURL,id)
        .then(async function(response){
            setNotes(response.data);
        })
        .catch(function(err){
            console.log(err);
        });
    }

    async function updateNote(id,edit){
        await axios.patch("https://mynotes-server-mg5n.onrender.com/api/"+id,edit)
        .then(async function(response){
            setNotes(response.data);
        })
        .catch(function(err){
            console.log(err);
        });
    }


    return (

        <div>
            <Header/>
            <Input onAdd={addNote}/>
            {notes.map((note,index)=><Note key={index} note={note} onDelete={deleteNote} onUpdate={updateNote} id={index}/>)}
            <Footer/>
        </div>
    );
}

export default App;