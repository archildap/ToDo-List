const ToDo = ({task, completeTask}) => {
    return (
        <div>
            <p>{task}</p>
            <button className="btn" onClick={completeTask}>Complete Task</button>
        </div>
    );
}

export default ToDo;