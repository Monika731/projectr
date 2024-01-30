import 'src/components/Task/Task.css';

function Task( {id, title, body, lane, onDragStart}) {
    return (
        <div className='Task-wrapper' draggable='true'
            onDragStart={(event) => onDragStart(event, id)}
        >
            <h3>{title}</h3>
            <p>{body}</p>
            <p>ID: <b>{id}</b></p>
            <p>Lane: <b>{lane}</b></p>
        </div>
    )
}

export default Task;