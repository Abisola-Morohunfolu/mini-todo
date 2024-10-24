import Check from "../../assets/checkmark.svg";
import { Todo } from "../../utils/helpers";

interface TodoItemProps {
  setIsCompleted: (val: boolean) => void;
  onEdit: () => void;
  todo: Todo;
}

const TodoItem = ({ setIsCompleted, todo }: TodoItemProps) => {
  return (
    <div className="bg-white shadow-md flex items-center gap-3 p-4 border border-gray-200 rounded-lg max-w-sm mb-4">
      <button
        onClick={() => setIsCompleted(!todo.isCompleted)}
        className="relative h-5 w-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {todo.isCompleted ? (
          <div className="h-full w-full flex items-center justify-center bg-green-500 rounded-full">
            <img src={Check} className="h-3 w-3 text-white" />
          </div>
        ) : (
          <div className="h-full w-full rounded-full border-2 border-gray-300" />
        )}
      </button>
      <span
        className={`flex-1 text-gray-700 ${
          todo.isCompleted ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.todo}
      </span>
      <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
        Edit
      </button>
    </div>
  );
};

export default TodoItem;
