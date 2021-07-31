import { useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

function App() {
  
  const [todoData, setTodoData] = useState([])
  const [modal, setModal] = useState(false)
  
  return (
    <div className="app">
      <Header />
      <TodoContainer setTodoData={setTodoData} todoData={todoData} />
      <button className='createButton' onClick={() => setModal(true)} >
        +
      </button>
      <CreateTodo setTodoData={setTodoData} setModal={setModal} modal={modal} />
    </div>
  );
}

export default App;
