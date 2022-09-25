import { ChangeEvent, useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Todo } from '../@types/todo'

import { editedTodoAtom, isEditSelector } from '../store/todoStates'

export const useEditTodo = () => {
  console.log('useEditTodo')
  const isEdit = useRecoilValue(isEditSelector)
  const [editedTodo, setEditedTodo] = useRecoilState(editedTodoAtom)

  const onChangeTodo = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEditedTodo((todo) => ({
        ...todo,
        [e.target.name]: e.target.value,
      }))
    },
    [setEditedTodo]
  )

  return {
    isEdit,
    editedTodo,
    onChangeTodo,
  }
}
