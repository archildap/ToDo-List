import{memo} from 'react';
    
const Completed = ({task, removeTask, addToList, index}) => {
    {console.log('completed -> render')}
    return(
        <div>
            <p>{task}</p>
            <button className="btn" onClick={() => removeTask(index)}>Remove Task</button>
            <button className="btn" onClick={() => addToList(index)}>Add To Todo list</button>
        </div>
    )
}
    


export default memo(Completed);