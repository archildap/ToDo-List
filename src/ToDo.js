import{memo} from 'react';

const ToDo = ({task, completeTask, index}) => {
    console.log('todo -> render')
    return (
        <div>
            <p>{task}</p>
            <button className="btn" onClick={(event) => completeTask(index)}>Complete Task</button>
        </div>
    );
}
    
    

export default memo(ToDo);