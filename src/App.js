import './App.css';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

function App() {
  
  return (
    <div className="app">
      <Header />
      <TodoContainer />
      <button className='createButton'>
        +
      </button>
    </div>
  );
}

export default App;
