import create from 'zustand'
import { ERROR_CODES } from '../libs/api/error'
import { login } from '../libs/api/user'

type Store = {
  form: {
    email: string
  }
  user: {
    id: number
    username: string
    email: string
  }
  setForm: (email: string) => void
  login: () => Promise<boolean>
  logout: () => void
}

export const useUserSlice = create<Store>((set, get) => ({
  form: {
    email: '',
  },
  user: {
    id: 0,
    username: '',
    email: '',
  },
  errMsg: '',
  setForm: (email: string) => {
    set({
      form: {
        email,
      },
    })
  },
  login: async () => {
    const { user, code } = await login(get().form.email)
    if (code === ERROR_CODES.NOT_EXISTS_USER.code) return false
    const getUser = user[0]
    set({
      user: {
        id: getUser.id,
        username: getUser.username,
        email: getUser.email,
      },
    })
    return true
  },
  logout: () => {
    set({
      user: {
        id: 0,
        username: '',
        email: '',
      },
    })
  },
}))
