import { Component } from 'react';
import './App.css';
import AddTask from './Task'
import ToDo from './ToDo'
import Completed from './Completed'


class App extends Component{
  state = {
    temp: {task: ''},
    todo: [],
    completed: [],
  }

  onChange = (event) => {
    const temp = {...this.setState.temp};
    temp.task = event.target.value;
    this.setState({temp});
  }

  addTask = () => {
    const temp = {...this.state.temp};
    const todo = [...this.state.todo];
    todo.push(temp)
    this.setState({todo});    
  }

  addToList = (index) => {
    const completed = [...this.state.completed];
    const todo = [...this.state.todo];
    todo.push(completed[index]);
    this.setState({todo});
    completed.splice(index, 1);
    this.setState({completed});
  }

  completeTask = (event, index) => {
    const todo = [...this.state.todo];
    const completed = [...this.state.completed];
    completed.push(todo[index]);
    this.setState(this.state.completed = completed);
    todo.splice(index, 1)
    this.setState({todo});
  }

  removeTask = (index) => {
    const completed = [...this.state.completed];
    completed.splice(index, 1);
    this.setState({completed});
  }


  render() {
    return (
      <div className="App">  
        <AddTask task={this.state.temp.task} onChange = {this.onChange} addTask={this.addTask} />
        <div className="container">
          <div className='todo'>
            <h1>ToDo List</h1>
            {this.state.todo.map((todo, index) => {
              return <ToDo
                key={index}
                task={todo.task}
                completeTask={this.completeTask}
                index={index} />
            })}
          </div>
          <div className='completed'>
            <h1>Completed</h1>
            {this.state.completed.map((completed, index) => {
              return <Completed
                key={index}
                task={completed.task}
                removeTask={this.removeTask}
                addToList={this.addToList}
                index={index} />
            })}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
