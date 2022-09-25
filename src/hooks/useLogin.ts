import { useRecoilState, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import { inputtedEmailAtom, userValueAtom } from '../store/userStates'
import { login } from '../libs/api/user'
import { ERROR_CODES } from '../libs/api/error'

export const useLogin = () => {
  const [email, setEmail] = useRecoilState(inputtedEmailAtom)
  const setUser = useSetRecoilState(userValueAtom)

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
  }, [login, email])

  return {
    email,
    setEmail,
    setUser,
    onClickLogin,
  }
}
