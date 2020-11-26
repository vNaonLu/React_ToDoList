import logo from './logo.svg';
import Header from './components/header';
import ToDoList from './components/todoList';
import data from './misc/example.json'
import { useState, useEffect } from 'react';
import globalContext, { Provider } from './misc/context';
import './App.css';

function App() {

  const [tasks, setTasks] = useState(data);

  const contextValue = {
    tasks, 
    setTasks
  };

  useEffect(()=>{
    let leftTask = 0;
    tasks.forEach(task=>{
      if(!task.complete) leftTask++;
    });
    document.title=`TodoList - ${leftTask==0 ? `Done` : `left ${leftTask} tasks`}.`;
  });

  return (
    <div className="App">
      <Provider value={contextValue}>
        <Header />
        <ToDoList todoList={tasks} />
      </Provider>
    </div>
  );
}

export default App;
