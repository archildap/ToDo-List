const Completed = ({task, removeTask, addToList}) => {
    return(
        <div>
            <p>{task}</p>
            <button className="btn" onClick={removeTask}>Remove Task</button>
            <button className="btn" onClick={addToList}>Add To Todo list</button>
        </div>
    )
}

export default Completed;