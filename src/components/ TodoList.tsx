import { useEffect } from 'react'
import { isEmpty } from 'lodash'

import { useTodoStore } from '../store/todoStore'

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos)
  const fetchTodos = useTodoStore((state) => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  const ErrorMessage = () => (
    <p className="text-red-500">Todoが存在しません。</p>
  )

  const TodoLists = () => {
    return (
      <>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex gap-x-2 items-center border-dotted border-b py-2 mt-2"
          >
            <span>{todo.id}. </span>
            <span className="text-gray-500">{todo.title}</span>
            <button className="bg-gray-400 hover:bg-gray-300 text-white rounded px-2 py-1">
              編集
            </button>
            <input
              type="checkbox"
              name="todo-completed"
              id={todo.id.toString()}
            />
          </li>
        ))}
      </>
    )
  }

  return (
    <ul className="flex gap-3 flex-col">
      {isEmpty(todos) || todos[0].id === 0 ? <ErrorMessage /> : <TodoLists />}
    </ul>
  )
}
