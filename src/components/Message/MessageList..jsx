export function MessageList({ mess }) {
    return (
        <>
            <ul>{mess.map((item, idx) => (
                <li key={idx}>{item.text}</li>
            ))}
            </ul>
        </>
    )
}