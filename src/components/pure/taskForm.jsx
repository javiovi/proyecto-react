import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';


const TaskForm = ({add}) => {


   const nameRef = useRef('');
   const descriptionRef = useRef('');
   const levelRef = useRef(LEVELS.NORMAL);

function addTask(e){
  e.preventDefault();
  const newTask = new Task(
    nameRef.current.value,
    descriptionRef.current.value,
    false,
    levelRef.current.value
  );
  add(newTask);
}



  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
     <div className='form-outline flex-fill'>
      <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='task Name'/>
      <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description' />
<label htmlFor='selectLevel' className='src-only'>
<select ref={levelRef} defaultValue='normal' id='selectLevel'>
<option value={LEVELS.NORMAL}>
  Normal
</option>
<option value={LEVELS.URGENT}>
  Urgent
</option>
<option value={LEVELS.BLOCKING}>
  blocking
</option>



</select>
  Priority
</label>
    </div>
    <button type='submit' className='btn btn-success btn-lg ms-2'>
      Add
    </button>
    </form>
  );
}


TaskForm.protoTypes = {
  add: PropTypes.func.isRequired
}

export default TaskForm;
