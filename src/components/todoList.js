import './todoList.css';
import globalContext from '../misc/context';
import { useContext } from 'react';

const ToDo = ({index, todo}) => {
  const {totalTasks,setTotalTasks} = useContext(globalContext);

  const handleClick = (e)=>{    
    console.log(`task#${todo.id} ${todo.task} has been ${todo.complete?"unchecked":"checked"}`)
    const updatedTask = totalTasks.map(task=>{
      return task.id === todo.id ? {...task, complete: !todo.complete} : {...task};
    });
    setTotalTasks(updatedTask);
  }
  return(
    <li className={index%2?"todo-container":"todo-container even-item"}>
      <input type="checkbox" checked={todo.complete ? "checked" : ""} onChange={handleClick}></input>
      <div className={todo.complete ? "todo-done" : "todo-notyet"} onClick={handleClick}>
          {todo.task}
      </div>
    </li>
  )
}

const ToDoList = ({todoList})=>{
  const {hideIncomplete,totalTasks} = useContext(globalContext);
  const filteredTask = totalTasks.filter((task)=>(!hideIncomplete || (hideIncomplete && !task.complete)));
  return(
    <ul className="todolist">
      {filteredTask.map((todo, i)=>{
          return <ToDo key={i} todo={todo} index={i} />
      })}
    </ul>
  )
}

export default ToDoList;