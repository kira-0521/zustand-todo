import { useEffect } from 'react'
import { isEmpty } from 'lodash'

import { useTodoSlice } from '../store/todoSlice'
import { useUserSlice } from '../store/userSlice'

export const TodoList = () => {
  const todos = useTodoSlice((state) => state.todos)
  const setEditedTodo = useTodoSlice((state) => state.setEditedTodo)
  const fetchTodos = useTodoSlice((state) => state.fetchTodos)
  const loginUser = useUserSlice((state) => state.user)

  useEffect(() => {
    fetchTodos()
  }, [])

  const ErrorMessage = () => (
    <p className="text-red-500">Todoが存在しません。</p>
  )

  const TodoLists = () => {
    return (
      <>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="flex gap-x-2 items-center border-dotted border-b py-2 mt-2"
          >
            <span>{index + 1}. </span>
            <span className="text-gray-500">{todo.title}</span>
            {todo.userId === loginUser.id && (
              <button
                onClick={() => setEditedTodo(todo.id)}
                className="bg-gray-400 hover:bg-gray-300 text-white rounded px-2 py-1"
              >
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
      </>
    )
  }

  return (
    <ul className="flex gap-3 flex-col">
      {isEmpty(todos) || todos[0].id === 0 ? <ErrorMessage /> : <TodoLists />}
    </ul>
  )
}
