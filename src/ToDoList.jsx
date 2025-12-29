import React, {useState} from 'react';
import {LuList} from 'react-icons/lu';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length -1) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    return(
        <div className='container-box text-center my-5 p-3 px-4 mx-auto border border-secondary rounded'>
            <h3 className='mb-1'><LuList className='mb-1 me-1' />To Do List</h3>

            <hr className='m-0 mb-3'/>

            <div className="input-group mb-2">
                <input className='form-control' type="text" placeholder='Enter a task...'
                    value={newTask} onChange={handleInputChange}/>
                <button className="btn btn-primary" onClick={addTask}>Add</button>
            </div>

            <ol className='p-0 m-0'>
                {tasks.map((task, index)=>
                <li className='d-flex mx-2 mb-2 p-1 bg-primary bg-opacity-25 border border-secondary border-opacity-50 rounded' key={index}>
                    <input type='checkbox' id='task' className='form-check-input me-1' />
                    <div htmlFor="task" className="text-start fw-semibold">{task}</div>
                    <div className='d-flex ms-auto mb-auto border border-secondary border-opacity-25 rounded px-1'>
                        <button className="btn text-danger"
                            onClick={()=>deleteTask(index)}><MdDelete className='mb-1' /></button>
                        
                        <button className="btn ms-1 text-secondary btn-sm"
                            onClick={()=>moveTaskUp(index)}><FaArrowUp className='mb-1' /></button>

                        <button className="btn ms-1 text-secondary btn-sm"
                            onClick={()=>moveTaskDown(index)}><FaArrowDown className='mb-1' /></button>
                    </div>
                </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList