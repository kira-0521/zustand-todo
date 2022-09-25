import { isNil } from 'lodash'
import { UserValueAtom } from '../../store/userStates'
import { CURRENT_USER_STORAGE_KEY } from '../const'

export const getCurrentUserByStorage = (): UserValueAtom | undefined => {
  const currentUser = localStorage.getItem(CURRENT_USER_STORAGE_KEY)
  if (isNil(currentUser)) {
    return undefined
  }
  return JSON.parse(currentUser) as UserValueAtom
}

export const setUserStorage = (user: UserValueAtom) => {
  localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user))
}

export const removeUserStorage = () => {
  localStorage.removeItem(CURRENT_USER_STORAGE_KEY)
}
