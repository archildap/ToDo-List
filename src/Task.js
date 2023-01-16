const AddTask = ({onChange, task, addTask}) => {
    return (
        <div className="task-container">
            <input className='task-input' value={task} type='text' placeholder='Enter a task' onChange={onChange}/>
            <button onClick={addTask} className='btn'>Add Task</button>   
        </div>
    );
};

export default AddTask;