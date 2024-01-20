import { useState, useEffect } from 'react';
import axios from 'axios';

import Lane from 'src/components/Lane/Lane';
import 'src/pages/Board/Board.css';

const lanes = [
    { id: 1, title: 'Backlog'},
    { id: 2, title: 'To Do'},
    { id: 3, title: 'Doing'},
    { id: 4, title: 'Done'}
]
function Board() {
    // Set up initial state os state variables
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Define a function that loads tasks from API
        const loadTasks = async() => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/tasks');
                console.log(response.data);
                setTasks( (tasks) => [...response.data]);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
                console.error(err);
            }
        };

        // Call the function we defined
        setLoading(true);
        loadTasks();
    }, []);


    return(
        <div className='Board-wrapper'>
            {lanes.map( (lane) => (
                <Lane key={lane.id} 
                title={lane.title}
                loading={loading}
                error={error}
                tasks={tasks.filter((task) => task.lane === lane.id)}/>
            ))}
        </div>
    )
}

export default Board;