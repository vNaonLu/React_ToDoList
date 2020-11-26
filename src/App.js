import Header from './components/header';
import ToDoList from './components/todoList';
import { FilterButton,AddNewTask } from './components/userInput';
import data from './misc/example.json'
import { useState, useEffect } from 'react';
import { Provider } from './misc/context';
import './App.css';

function App() {

  const [hideIncomplete, setHideIncomplete] = useState(false);
  const [totalTasks, setTotalTasks] = useState(data);

  useEffect(()=>{
    changeTitle();
  });

  const changeTitle = ()=>{
    let leftTask = 0;
    totalTasks.forEach(task=>{
      if(!task.complete) leftTask++;
    });
    document.title=`TodoList - ${leftTask===0 ? `Done` : `left ${leftTask} tasks`}.`;
  };


  const contextValue = {
    hideIncomplete,
    setHideIncomplete,
    totalTasks,
    setTotalTasks,
  };

  return (
    <div className="App">
      <Provider value={contextValue}>
        <Header />
        <AddNewTask />
        <FilterButton />
        <br/>
        <ToDoList />
      </Provider>
    </div>
  );
}

export default App;
