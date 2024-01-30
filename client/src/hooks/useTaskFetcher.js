import { useState, useEffect } from 'react';
import axios from 'axios';

function useTaskFetcher(dataSource) {
    // Set up initial state os state variables
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Define a function that loads tasks from API
        const loadTasks = async() => {
            try {
                const response = await axios.get(dataSource);
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

    return [loading, error, tasks];

}

export default useTaskFetcher;