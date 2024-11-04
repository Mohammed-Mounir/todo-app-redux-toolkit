import iconCheck from '../../assets/images/icon-check.svg';
import iconCross from '../../assets/images/icon-cross.svg';
import { useAppDispatch } from '../../store/hooks';
import { deleteTodo, toggleTodo } from '../../store/todosSlice';
import { ITodo } from '../../types';

interface IItemProps {
  todo: ITodo;
}

export default function Item({ todo }: IItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center bg-white dark:bg-very-dark-desaturated-blue w-full py-4 px-5 gap-3 border-b dark:border-very-dark-grayish-blue-dark2">
      <button
        className={`flex items-center justify-center w-5 h-5 rounded-full  ${
          todo.completed
            ? 'bg-gradient-to-br from-check-bg-blue to-check-bg-purple'
            : 'border border-very-dark-grayish-blue-dark'
        }`}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.completed && (
          <img
            className="w-[0.65rem] h-[0.65rem] rounded-full"
            src={iconCheck}
          />
        )}
      </button>
      <p
        className={`${
          todo.completed
            ? 'line-through text-light-grayish-blue dark:text-very-dark-grayish-blue-dark'
            : 'text-very-dark-grayish-blue dark:text-light-grayish-blue-dark'
        }`}
      >
        {todo.text}
      </p>
      <button className="ms-auto" onClick={() => dispatch(deleteTodo(todo.id))}>
        <img className="w-3 h-3" src={iconCross} />
      </button>
    </div>
  );
}
