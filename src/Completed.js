import { PureComponent } from "react";

class Completed extends PureComponent{


    render() {        
        const {task, removeTask, addToList, index} = this.props;
        {console.log('completed -> render')}
        return(
            <div>
                <p>{task}</p>
                <button className="btn" onClick={() => removeTask(index)}>Remove Task</button>
                <button className="btn" onClick={() => addToList(index)}>Add To Todo list</button>
            </div>
        )
    }
}

export default Completed;