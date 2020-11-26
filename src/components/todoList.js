import './todoList.css';
import globalContext from '../misc/context';
import { useContext } from 'react';

const ToDo = ({todo}) => {
  const {totalTasks,setTotalTasks} = useContext(globalContext);

  const handleClick = (e)=>{    
    console.log(`${todo.task} has been ${todo.complete?"unchecked":"checked"}`)
    const updatedTask = totalTasks.map(task=>{
      return task.id === todo.id ? {...task, complete: !todo.complete} : {...task};
    });
    setTotalTasks(updatedTask);
  }
  return(
    <li className={todo.id%2?"todo-container":"todo-container even-list"}>
      <input type="checkbox" checked={todo.complete ? "checked" : ""} onChange={handleClick}></input>
      <div className={todo.complete ? "todo-done" : "todo-notyet"} onClick={handleClick}>
          {todo.task}
      </div>
    </li>
  )
}

const ToDoList = ({todoList})=>{
  const {hideIncomplete,totalTasks} = useContext(globalContext);
  return(
    <ul className="todolist">
      {totalTasks.map((todo, i)=>{
          return (!hideIncomplete || (hideIncomplete && !todo.complete)) ?
            (
              <ToDo key={i} todo={todo} />
            ) : null
      })}
    </ul>
  )
}

export default ToDoList;