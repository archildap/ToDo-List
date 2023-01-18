import { PureComponent } from "react";

class AddTask extends PureComponent{
    render() {
        const {onChange, task, addTask} = this.props;
        {console.log('task -> render')}
        return (
            <div className="task-container">
                <input className='task-input' value={task} type='text' placeholder='Enter a task' onChange={(event) => onChange(event)}/>
                <button onClick={addTask} className='btn'>Add Task</button>
            </div>
        );
    }
}

export default AddTask;