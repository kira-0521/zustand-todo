import { useCallback } from 'react'
import { useTodoSlice } from '../store/todoSlice'

export const TodoForm = () => {
  const editedTodo = useTodoSlice((state) => state.editedTodo)
  const setTodoTitle = useTodoSlice((state) => state.setTodoTitle)
  const createTodo = useTodoSlice((state) => state.createTodo)
  const updateTodos = useTodoSlice((state) => state.updateTodos)

  const onClickHandler = useCallback(() => {
    editedTodo.id === 0 ? createTodo() : updateTodos()
  }, [editedTodo.id, createTodo, updateTodos])

  return (
    <div className="flex items-center justify-center gap-x-2">
      <label
        htmlFor="title"
        className="flex items-center justify-center gap-x-2"
      >
        <input
          type="text"
          id="title"
          value={editedTodo.title}
          onChange={(e) => setTodoTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <button
        onClick={onClickHandler}
        className="bg-sky-400 hover:bg-sky-300 text-white rounded px-2 py-1"
      >
        {editedTodo.id === 0 ? '作成' : '編集'}
      </button>
    </div>
  )
}
