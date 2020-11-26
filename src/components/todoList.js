import './todoList.css';
import globalContext from '../misc/context';
import { useContext } from 'react';

const ToDo = ({todo}) => {
  const {tasks,setTasks} = useContext(globalContext);

  const handleClick = (e)=>{    
    const updatedTask = tasks.map(task=>{
      return task.id === todo.id ? {...task, complete: !task.complete} : {...task};
    });
    setTasks(updatedTask);
  }
  return(
    <div className={todo.id%2?"todo-container":"todo-container even-list"}>
      <input type="checkbox" checked={todo.complete ? "checked" : ""} onClick={handleClick}></input>
      <div className={todo.complete ? "todo-done" : "todo-notyet"} onClick={handleClick}>
          {todo.task}
      </div>
    </div>
  )
}

const ToDoList = ({todoList})=>{
  return(
    <div>
      {todoList.map((todo, i)=>{
          return(
            <ToDo todo={todo} />
          )
      })}
    </div>
  )
}

export default ToDoList;