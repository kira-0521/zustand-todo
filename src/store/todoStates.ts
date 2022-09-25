import { atom, selector } from 'recoil'
import { Todo } from '../@types/todo'

export const todoAtom = atom<Todo[]>({
  key: 'store.todoStates.todoAtom',
  default: [],
})

export const editedTodoAtom = atom<Todo>({
  key: 'store.todoStates.editedTodoAtom',
  default: {
    id: 0,
    userId: 0,
    title: '',
    completed: false,
  },
})

export const isEditSelector = selector({
  key: 'store.todoStates.isEdit',
  get: ({ get }) => {
    const currentEditTodo = get(editedTodoAtom)
    return currentEditTodo.id !== 0
  },
})
