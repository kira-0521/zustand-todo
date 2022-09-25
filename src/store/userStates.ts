import { atom, selector } from 'recoil'
import { isNil } from 'lodash'

import { viewLogger } from '../libs/logger'
import {
  getCurrentUserByStorage,
  removeUserStorage,
  setUserStorage,
} from '../libs/storage/user'
import { NOT_LOGIN_USER_ID } from '../libs/const'

export type UserValueAtom = {
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
  effects: [
    ({ onSet }) => {
      onSet((newUser) => {
        viewLogger('loginUser: ', newUser)
        const currentUser = getCurrentUserByStorage()
        if (newUser.id === NOT_LOGIN_USER_ID) {
          removeUserStorage()
          return
        }
        if (isNil(currentUser)) {
          setUserStorage(newUser)
        }
      })
    },
  ],
})

export const isLoginSelector = selector<Boolean>({
  key: 'store.userStates.isLoginSelector',
  get: ({ get }) => {
    const currentUser = get(userValueAtom)
    return currentUser.id !== NOT_LOGIN_USER_ID
  },
})
