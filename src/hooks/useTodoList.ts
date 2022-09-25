import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { ERROR_CODES } from '../libs/api/error'
import { fetchTodos } from '../libs/api/todo'
import { todoAtom } from '../store/todoStates'

export const useTodoList = () => {
  const [todos, setTodos] = useRecoilState(todoAtom)

  const _getTodos = useCallback(async () => {
    const res = await fetchTodos()
    if (res.code !== ERROR_CODES.NO_ERROR.code) return
    setTodos(res.todos)
  }, [fetchTodos])

  useEffect(() => {
    _getTodos()
  }, [])

  return {
    todos,
  }
}
