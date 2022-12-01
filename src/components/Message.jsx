import MessageModule from './Message.module.css'
export function Message(props) {

    console.log('props', props);
    return (
        < h1 className={MessageModule.text} > {props.title}</h1 >
    )
}