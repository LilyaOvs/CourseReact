import { useState } from "react"
import ITextField from '@mui/material/TextField';
import { Button } from "../ui/Button"
import IButton from '@mui/material/Button';

export function Form({ addMessage }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: 'user',
            text
        });
        setText('');
        console.log('text', text);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ITextField
                    id="outlined-basic"
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    label="Поиск..."
                    variant="outlined"
                    size="small"
                    inputRef={input => input && input.focus()}
                    autoComplete="off"
                    noValidate
                />
                {/* <input type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)} /> */}
                <IButton type="submit" variant="outlined">Outlined</IButton>
                {/* <Button >Add</Button> */}
            </form>

        </>
    )
}

