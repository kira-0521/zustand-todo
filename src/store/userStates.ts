import { atom, selector } from 'recoil'

import { ERROR_CODES } from '../libs/api/error'
import { login } from '../libs/api/user'

type UserValueAtom = {
  id: number
  name: string
  email: string
}

export const inputtedEmailAtom = atom<string>({
  key: 'store.userStates.inputtedEmailAtom',
  default: '',
})

export const userValueAtom = atom<UserValueAtom>({
  key: 'store.userStates.userValueAtom',
  default: {
    id: 0,
    name: '',
    email: '',
  },
})

export const isLoginSelector = selector<Boolean>({
  key: 'store.userStates.isLoginSelector',
  get: ({ get }) => {
    const currentUser = get(userValueAtom)
    return currentUser.id !== 0
  },
})
