import React, { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';
import TaskForm from '../pure/taskForm';

const TaskListComponent = () => {
const defaultTask1 = new Task('Example1', 'description1', true, LEVELS.NORMAL);
const defaultTask2 = new Task('Example2', 'description2', false, LEVELS.URGENT);
const defaultTask3 = new Task('Example3', 'description3', false, LEVELS.BLOCKING);


//Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const[loading, setLoading] = useState(true);
 
  //Control del ciclo de vida del componente
  useState(() => {
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
    <div className='col-12'>
    <div className='card'>
    
      <div className='card-header p-3'>
        <h5>Your Tasks: </h5>
</div>

<div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative', height:'400px' }}>
<table>
<thead>
  <tr>
    <th scope='col'>Title</th>
    <th scope='col'>Description</th>
    <th scope='col'>Priority</th>
    <th scope='col'>Actions</th>
  </tr>
  </thead>
<tbody>
  {/*TODO iterar sobre una lista de tareas */}
  {tasks.map((task, index) => {
    return (
      <TaskComponent 
      key={index} 
      task={task}>

      </TaskComponent>
    )
  })}
  
</tbody>

</table>
<div><TaskForm></TaskForm></div>
</div>
    </div>
     
    </div>
{/*<TaskComponent task={defaultTask}></TaskComponent>*/}
    </div>
  );
};



export default TaskListComponent; 
