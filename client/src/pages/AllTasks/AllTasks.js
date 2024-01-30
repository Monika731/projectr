import useTaskFetcher from "src/hooks/useTaskFetcher";
import './AllTasks.css'

function AllTasks( {apiURL} ) {
    const [loading, error, taskdata] = useTaskFetcher(apiURL + '/tasks');

    return(
        <div className="Tasks-wrapper">
            { loading ? 
                (<span>Loading...</span>)
            :
                (
                    <ul>
                        {
                            taskdata.map((task) => <li>{task.title}</li>)
                        }
                    </ul>
                )
            }

        </div>
    );

}

export default AllTasks;