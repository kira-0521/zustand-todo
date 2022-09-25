import { ChangeEvent, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { editedTodoAtom } from '../store/todoStates'

export const TodoForm = () => {
  const [editedTodo, setEditedTodo] = useRecoilState(editedTodoAtom)

  const onChangeTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditedTodo((todo) => ({
      ...todo,
      title: e.target.value,
    }))
  }, [])

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
      <button className="bg-sky-400 hover:bg-sky-300 text-white rounded px-2 py-1">
        作成
      </button>
    </div>
  )
}
