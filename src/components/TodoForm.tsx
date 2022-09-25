import { useEditTodo } from '../hooks/useEditTodo'
import { useTodo } from '../hooks/useTodo'

export const TodoForm = () => {
  const { isEdit, onChangeTodo, editedTodo } = useEditTodo()
  const { createTodo, updateTodo } = useTodo()

  return (
    <div className="flex items-center justify-center gap-x-2">
      <label
        htmlFor="title"
        className="flex items-center justify-center gap-x-2"
      >
        <input
          type="text"
          id="title"
          onChange={onChangeTodo}
          value={editedTodo.title}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <button
        onClick={isEdit ? updateTodo : createTodo}
        className="bg-sky-400 hover:bg-sky-300 text-white rounded px-2 py-1"
      >
        {isEdit ? '更新' : '作成'}
      </button>
    </div>
  )
}
