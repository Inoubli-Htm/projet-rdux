import "./App.css";
import AddTodo from "./components/AddTodo";
import DoneTodo from "./components/DoneTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>projet redux</h1>
      <AddTodo />
      <DoneTodo />
      <Todos />
    </div>
  );
}

export default App;
