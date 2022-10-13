import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function onChangeHandler(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });

    }

    function submitNote(event) {

        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded &&
                    (<input name="title"
                        onChange={onChangeHandler}
                        value={note.title}
                        placeholder="Title" />
                    )}
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={onChangeHandler}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1} />


                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <NoteAddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
