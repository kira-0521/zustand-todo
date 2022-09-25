import { useRecoilValue, useSetRecoilState } from 'recoil'
import clsx from 'clsx'

import { userValueAtom } from '../store/userStates'
import { useTodoList } from '../hooks/useTodoList'
import { useTodo } from '../hooks/useTodo'
import { editedTodoAtom } from '../store/todoStates'

export const TodoList = () => {
  const loginUser = useRecoilValue(userValueAtom)
  const setEditedTodo = useSetRecoilState(editedTodoAtom)

  const { todos } = useTodoList()
  const { onChangeComplete } = useTodo()

  const isMine = (id: number) => loginUser.id === id

  return (
    <ul className="flex gap-3 flex-col">
      {todos.map((todo, idx) => (
        <li
          key={todo.id}
          className={`flex gap-x-2 items-center border-dotted border-b py-2 mt-2`}
        >
          <span>{idx + 1}. </span>
          <span
            className={`text-gray-500 ${clsx({
              'text-sky-200 line-through':
                todo.completed && isMine(todo.userId),
            })}`}
          >
            {todo.title}
          </span>
          {isMine(todo.userId) && (
            <>
              <button
                onClick={() => setEditedTodo(todo)}
                className="bg-gray-400 hover:bg-gray-300 text-white rounded px-2 py-1"
              >
                編集
              </button>
              <input
                type="checkbox"
                name="completed"
                id={todo.id.toString()}
                checked={todo.completed}
                onChange={() => onChangeComplete(todo.id)}
              />
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
