import { useEffect, useState } from 'react'
import { Message } from './components/Message'
import { Form } from './components/Form/Form'
import { MessageList } from './components/Message/MessageList.'


export function App() {

    const [message, setMessage] = useState([]);
    const addMess = (newMess) => {
        setMessage([...message, newMess]);
    }

    useEffect(() => {
        if (message.length > 0 && message[message.length - 1].author === 'user') {
            const timeout = setTimeout(() => {
                addMess({
                    author: 'bot',
                    text: 'bot it`s me'
                })
            }, 1500);

            return () => {
                clearTimeout(timeout);
            }
        }

    }, [message])

    return (
        <>
            <Message title='Переданный пропсом текст' />
            <Form addMessage={addMess} />
            <MessageList mess={message}></MessageList>
        </>
    )
}

// Не совсем поняла разницу между вторым и третьим заданиями