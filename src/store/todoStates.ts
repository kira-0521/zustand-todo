import { atom, selector } from 'recoil'
import { Todo } from '../@types/todo'
import { viewLogger } from '../libs/logger'

export const todoAtom = atom<Todo[]>({
  key: 'store.todoStates.todoAtom',
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        viewLogger('todoAtom: ', newValue)
      })
    },
  ],
})

export const editedTodoAtom = atom<Todo>({
  key: 'store.todoStates.editedTodoAtom',
  default: {
    id: 0,
    userId: 0,
    title: '',
    completed: false,
  },
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        viewLogger('onset editedTodo', newValue)
      })
    },
  ],
})

export const isEditSelector = selector({
  key: 'store.todoStates.isEdit',
  get: ({ get }) => {
    const currentEditTodo = get(editedTodoAtom)
    return currentEditTodo.id !== 0
  },
})
