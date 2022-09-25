import { ChangeEvent, useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { editedTodoAtom, isEditSelector } from '../store/todoStates'

export const useEditTodo = () => {
  const isEdit = useRecoilValue(isEditSelector)
  const [editedTodo, setEditedTodo] = useRecoilState(editedTodoAtom)

  const onChangeTodo = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEditedTodo((todo) => ({
        ...todo,
        title: e.target.value,
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
