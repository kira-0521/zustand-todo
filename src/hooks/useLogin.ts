import { useRecoilState, useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import {
  inputtedEmailAtom,
  isLoginSelector,
  userValueAtom,
} from '../store/userStates'
import { login } from '../libs/api/user'
import { ERROR_CODES } from '../libs/api/error'

export const useLogin = () => {
  const [email, setEmail] = useRecoilState(inputtedEmailAtom)
  const [currentUser, setUser] = useRecoilState(userValueAtom)
  const isLogin = useRecoilValue(isLoginSelector)

  const navigate = useNavigate()

  const onClickLogin = useCallback(async () => {
    const res = await login(email)
    if (res.code !== ERROR_CODES.NO_ERROR.code) return
    setUser({
      id: res.user[0].id,
      name: res.user[0].name,
      email: res.user[0].email,
    })
    navigate('/home')
  }, [login, setUser, email])

  const onClickLogout = useCallback(async () => {
    setUser({
      id: 0,
      name: '',
      email: '',
    })
    navigate('/')
  }, [setUser])

  return {
    email,
    setEmail,
    currentUser,
    isLogin,
    setUser,
    onClickLogin,
    onClickLogout,
  }
}
