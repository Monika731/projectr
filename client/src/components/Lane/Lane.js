import 'src/components/Lane/Lane.css'
import Task from '../Task/Task';

function Lane({title, tasks, loading, error}) {
    return(
        <div className='Lane-wrapper'>
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
                         />
                    )
            ))
            }
        </div>
    )
}

export default Lane;