import { useRecoilValue } from 'recoil'

import { userValueAtom } from '../store/userStates'
import { useTodoList } from '../hooks/useTodoList'

export const TodoList = () => {
  const loginUser = useRecoilValue(userValueAtom)
  const { todos } = useTodoList()

  return (
    <ul className="flex gap-3 flex-col">
      {todos.map((todo, idx) => (
        <li
          key={todo.id}
          className="flex gap-x-2 items-center border-dotted border-b py-2 mt-2"
        >
          <span>{idx + 1}. </span>
          <span className="text-gray-500">{todo.title}</span>
          {loginUser.id === todo.userId && (
            <button className="bg-gray-400 hover:bg-gray-300 text-white rounded px-2 py-1">
              編集
            </button>
          )}
          <input
            type="checkbox"
            name="todo-completed"
            id={todo.id.toString()}
          />
        </li>
      ))}
    </ul>
  )
}
