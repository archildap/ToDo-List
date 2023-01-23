import {useState, useCallback, useRef} from 'react';
import './App.css';
import Task from './Task'
import ToDo from './ToDo'
import Completed from './Completed'


function App () {


  const [section, setSection] = useState({
    temp: {task: ''},
    todo: [],
    completed: [],
  });

  const inputRef = useRef(null);


  const onChange = useCallback((event) => { 

    setSection((section) => {
      section.temp.task = event.target.value;
      return {...section}
    });
  }, [])

  const addTask = useCallback(() => {
    setSection((section)=> {
      if (section.temp.task !== '') {
        section.todo.push(section.temp);
        section.temp = {
          task: ''
        }
        return {...section}
      } else {
        return {...section}
      }
      
    });
    

  }, [])

  const addToList = useCallback((index) => {

    setSection((section) => {
      section.todo.push(section.completed[index]);
      section.completed.splice(index, 1);

      return {...section}

    });

  }, []);

  const completeTask = useCallback((index) => {

    setSection((section) => {
      section.completed.push(section.todo[index]);
      section.todo.splice(index, 1);
      return {...section}
    });

  }, []);


  const removeTask = useCallback((index) => {

    setSection((section) => {
      section.completed.splice(index, 1);
      return {...section}
    });

  }, []);

  
    return (
      <div className="App">  
        <Task task = {section.temp.task} onChange = {onChange} addTask = {addTask} />
        <div className="container">
          <div className='todo'>
            <h1>ToDo List</h1>
            {section.todo.map((todo, index) => {
              return <ToDo
                key={index}
                task={todo.task}
                completeTask={completeTask}
                index={index} />
            })}
          </div>
          <div className='completed'>
            <h1>Completed</h1>
            {section.completed.map((completed, index) => {
              return <Completed
                key={index}
                task={completed.task}
                removeTask={removeTask}
                addToList={addToList}
                index={index} />
            })}
          </div>
        </div>
      </div>
    );  
}

export default App;
