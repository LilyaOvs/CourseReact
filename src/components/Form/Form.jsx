import { useState } from "react"
import { Button } from "../ui/Button"

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
                <input type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)} />
                <Button type="submit">Add</Button>
            </form>

        </>
    )
}

