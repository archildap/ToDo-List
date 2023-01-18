import { PureComponent } from "react";

class ToDo extends PureComponent {

    render() {
        const {task, completeTask, index} = this.props;
        console.log('todo -> render')
        return (
            <div>
                <p>{task}</p>
                <button className="btn" onClick={(event) => completeTask(event, index)}>Complete Task</button>
            </div>
        );    
    }
}
    

export default ToDo;