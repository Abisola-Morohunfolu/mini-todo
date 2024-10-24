import Sidebar from "./components/sidebar/sidebar";
import EditTodo from "./components/edit-todo/edit-todo";

function App() {
  return (
    <div className="w-full flex">
      <Sidebar />
      <EditTodo />
    </div>
  );
}

export default App;
