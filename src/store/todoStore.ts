import create from 'zustand'

import { Todo } from "../@types/todo"
import { fetchTodos } from '../libs/api/todo'
import { find } from 'lodash';

type Store = {
  editedTodo: Omit<Todo, 'userId' | 'completed'>
  todos: Todo[]
  setEditedTodo: (id: number) => void
  fetchTodos: () => void
  createTodo: () => void
  updateTodos: () => void
  deleteTodo: (id: number) => void
}

export const useTodoStore = create<Store>((set, get) => ({
  editedTodo: {
    id: 0,
    title: '',
  },
  todos: [],
  setEditedTodo: (id: number) => {
    set(state => ({ editedTodo: { id, title: find(state.todos, { id })!.title }}))
  },
  fetchTodos: async () => {
    const res = await fetchTodos()
    set({todos: res.todos})
  },
  createTodo: () => {
    const newTodo = {
      ...get().editedTodo,
      id: get().todos.length + 1,
      userId: 0,
      completed: false
    }
    set(state => ({todos: [...state.todos, newTodo]}))
  },
  updateTodos: () => {
    set(state => ({todos: state.todos.map(todo => {
      if (todo.id === get().editedTodo.id) {
        return {
          ...todo,
          title: get().editedTodo.title
        }
      }
      return todo
    })}))
  },
  deleteTodo: (id) => {
    set(state => ({todos: state.todos.filter(todo => todo.id !== id)}))
  }
}))