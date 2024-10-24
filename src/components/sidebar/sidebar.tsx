import { TODOS } from "../../utils/const";
import Button from "../button/button";
import Header from "../header/header";
import TodoItem from "../todo-item/todo-item";
import Upgrade from "../upgrade/upgrade";

const Sidebar = () => {
  return (
    <section className="w-[35%] lg:w-[30%] flex flex-col bg-[var(--bg-slate)] shadow-2xl relative">
      <Header />
      <Upgrade />
      <div className="px-8 py-6">
        {TODOS.map((todo) => (
          <TodoItem
            key={todo.id}
            onEdit={() => {}}
            setIsCompleted={() => {}}
            todo={todo}
          />
        ))}
      </div>
      <Button
        label="+"
        color="primary"
        variant="rounded"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          height: "60px",
          width: "60px",
        }}
      />
    </section>
  );
};

export default Sidebar;
