import 'src/components/Lane/Lane.css'
import Task from '../Task/Task';

function Lane({laneId, title, tasks, loading, error, onDragStart, onDragOver, onDrop}) {
    return(
        <div 
        className='Lane-wrapper'
        onDragOver={onDragOver}
        onDrop={(event) => onDrop(event, laneId)}
        >
            <h2>{title}</h2>
            {
                //IF LOADING
                loading ?
                    (<span>Loading...</span>)
                    :

                    (tasks.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            body={task.body}
                            lane={task.lane}
                            onDragStart={onDragStart}
                         />
                    )
            ))
            }
        </div>
    )
}

export default Lane;