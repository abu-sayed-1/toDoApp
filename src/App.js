import './App.css';
import ToDo from './components/ToDoApp/ToDo/ToDo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 className="todo_title">To Do App </h2>
          <ToDo />
        </div>
      </header>
    </div>
  );
}

export default App;
