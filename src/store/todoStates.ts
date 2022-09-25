import { atom } from 'recoil'
import { Todo } from '../@types/todo'

export const todoAtom = atom<Todo[]>({
  key: 'TodoList',
  default: [],
})

export const editedTodoAtom = atom<Omit<Todo, 'userId' | 'completed'>>({
  key: 'TodoEdited',
  default: {
    id: 0,
    title: '',
  },
})
