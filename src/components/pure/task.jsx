import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//Importamos la hoja de estilos de task.scss
//import '../../styles/task.scss'

const TaskComponent = ({task}) => {

useEffect(() => {
    console.log('TCreate Task')
    return () => {
        console.log(`Task: ${task.name} is going to aumont`)
    };
}, );






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
        <span >{task.level}</span>
        </td>
        <td className='align-middle'>
        <span >{task.completed ? 'Completed': 'Pending'}</span>
        </td>
        </tr>



      //  <div>
        //    <h2 className='task-name'>
          //  Nombre: { task.name } 
            //</h2>
            //<h3>Descripcion: { task.description }
            //</h3>
            //<h4>
              //  Level: { task.level }
            //</h4>
            //<h5>
              //  This task is: { task.completed ? 'COMPLETED':'PENDING' }
            //</h5>
        //</div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
