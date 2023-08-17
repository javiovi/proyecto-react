import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//Importamos la hoja de estilos de task.scss
//import '../../styles/task.scss'

const TaskComponent = ({task}) => {

useEffect(() => {
    console.log('Created Task')
    return () => {
        console.log(`Task: ${task.name} is going to aumont`)
    };
},[task] );

function taskLevelBadge(){
    switch (task.level) {
        case LEVELS.NORMAL:
            return(<h6 className='mb-0' > 
            <span className='badge bg-primary'>
                {task.level}
            </span>
         </h6>)
         case LEVELS.URGENT:
            return(<h6 className='mb-0' >
            <span className='badge bg-warning'>
                {task.level}
            </span>
         </h6>)
         case LEVELS.BLOKING:
            return(<h6 className='mb-0' >
            <span className='badge bg-danger'>
                {task.level}
            </span>
         </h6>)
    
    
    
        default:
            break;
    }
}
function taskCompletedIcon( ) {
    if(task.completed) {
        return (<i className='bi-toggle-on' style={{color: 'green'}}></i>)
    } else {
        return (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
    }
}





    return (
        <tr className='fw-normal'>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
        <span >{task.description}</span>
        </td>

        <td className='align-middle'>
        {/*SUstituir por un badger*/}
       {taskLevelBadge ()}
        </td>

        <td className='align-middle'>
      
{taskCompletedIcon}
(<i className='bi-toggle-on' style={{color: 'green'}}></i>)
 : (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)

 (<i className='bi-trash' style={{color: 'tomato', fontWeight:'bold'}}></i>)
        
        </td>
        </tr>



   
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
