import React, { useState } from 'react'
import { Todo } from '../@types/todo'

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ])
  return (
    <ul className="flex gap-3 flex-col">
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
    </ul>
  )
}
