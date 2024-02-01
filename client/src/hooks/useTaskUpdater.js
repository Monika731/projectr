import { useEffect } from 'react';
import axios from 'axios';

function useTaskUpdater(apiURL, modifiedTask, setModifiedTask) {
  useEffect(() => {
    console.log("I'm in the useEffect hook");
    console.log(modifiedTask);

    // Define a function that calls the API with the updated task
    const updateTask = async (task) => {
      try {
        const apiResponse = await axios.patch(`${apiURL}/tasks/${task.id}`, task);
        console.log(apiResponse.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (modifiedTask != null) {
      updateTask(modifiedTask);
    } else {
      console.log("Modified task is null");
    }

    // Cleanup
    return () => {
      setModifiedTask(null);
    };
  }, [apiURL, modifiedTask, setModifiedTask]);
}

export default useTaskUpdater;