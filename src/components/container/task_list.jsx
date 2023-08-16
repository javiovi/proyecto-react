import React, { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
//Estado del componente
  const [tasks, setTasks] = useState(defaultTask);
  const[loading, setLoading] = useState(true);
 
  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task state has been modified')
    return () => {
      console.log('TaskList component is goin to unmount')
    };
  }, [tasks]);


    
    const changeCompleted = (id) => {
          console.log('TODO: Cambiar estado de una tarea')
    }
    

  return (
    <div>
    <div>
       <h1> Your Tasks: </h1>
    </div>
<TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};



export default TaskListComponent;
