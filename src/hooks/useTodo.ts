import { useRecoilState, useRecoilValue } from 'recoil'
import { useCallback } from 'react'

import { Todo } from '../@types/todo'
import { userValueAtom } from '../store/userStates'
import { editedTodoAtom, todoAtom } from '../store/todoStates'
import { cloneDeep } from 'lodash'

export const useTodo = () => {
  const [editedTodo, setEditedTodo] = useRecoilState(editedTodoAtom)
  const currentUser = useRecoilValue(userValueAtom)
  const [currentTodos, setTodos] = useRecoilState(todoAtom)

  const resetEditedTodo = useCallback(() => {
    setEditedTodo({
      id: 0,
      userId: 0,
      title: '',
      completed: false,
    })
  }, [])

  const createTodo = useCallback(async () => {
    const newTodo: Todo = {
      id: currentTodos.length + 1 + 100,
      userId: currentUser.id,
      title: editedTodo.title,
      completed: false,
    }
    setTodos((todo) => [...todo, newTodo])
    resetEditedTodo()
  }, [editedTodo, currentTodos, currentUser])

  const updateTodo = useCallback(async () => {
    setTodos((todos) => {
      return cloneDeep(todos).map((todo) => {
        if (todo.id === editedTodo.id) {
          const { id, userId, title, completed } = editedTodo
          return {
            id,
            userId,
            title,
            completed,
          }
        }
        return todo
      })
    })
    resetEditedTodo()
  }, [setTodos])

  return { createTodo, updateTodo }
}
