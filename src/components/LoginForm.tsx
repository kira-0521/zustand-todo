import { ChangeEvent, useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { login } from '../libs/api/user'

import { inputtedEmailAtom, userValueAtom } from '../store/userStates'
import { ERROR_CODES } from '../libs/api/error'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
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

  return (
    <div className="flex items-center justify-center gap-x-2 h-screen">
      <label
        htmlFor="login"
        className="flex items-center justify-center gap-x-2"
      >
        <input
          type="text"
          id="login"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <button
        onClick={onClickLogin}
        className="bg-sky-400 hover:bg-sky-300 text-white rounded px-2 py-1"
      >
        ログイン
      </button>
    </div>
  )
}
