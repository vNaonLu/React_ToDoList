import { useContext, useState } from 'react';
import globalContext from '../misc/context';
import './userInput.scss';

const FilterButton = ()=>{  
  const { hideIncomplete, setHideIncomplete } = useContext(globalContext);
  const HideComplete = ()=>{
    setHideIncomplete(!hideIncomplete)
  }
  return(
    <div className="filter-button" onClick={HideComplete}>
      <input 
        type="checkbox" 
        checked={hideIncomplete ? "checked" : ""}
        onChange={HideComplete}
      />
      Hide the complete tasks.
    </div>
  );
}

const AddNewTask = ()=>{
  const [inputText, setInputTask] = useState("")
  const {totalTasks,setTotalTasks} = useContext(globalContext);

  const addNewTask = ()=>{
    setTotalTasks([
      ...totalTasks,
      {
        "id": totalTasks.length + 1,
        "task": inputText,
        "complete": false
      }
    ]);
    console.log(`New task#${totalTasks.length + 1} "${inputText} added."`);
    setInputTask("");
  }

  const enterSomeKey = (e)=>{
    if(e.key === 'Enter')
      addNewTask();
  }

  return (
    <div className="text-field">
      <input
        type="text"
        placeholder={`Enter some task, press "Enter" to add.`}
        onChange={(e)=>setInputTask(e.target.value)}
        onKeyDown={enterSomeKey}
        value={inputText}
        autoComplete="off"
      ></input>
    </div>
  );
}

export {FilterButton, AddNewTask};