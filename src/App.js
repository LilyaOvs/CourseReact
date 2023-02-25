import { useEffect, useState } from 'react'
import { Message } from './components/Message'
import { Form } from './components/Form/Form'
import { MessageList } from './components/Message/MessageList.'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import StarIcon from '@mui/icons-material/Star';


export function App() {

    // Функция, благодаря которой из дочернего компонента наверх "пробрасываем" данные
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
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Chelsea Otakan" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Eric Hoffman" />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}

// Не совсем поняла разницу между вторым и третьим заданиями