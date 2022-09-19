import { useNavigate } from 'react-router-dom'

import { useUserSlice } from '../store/userSlice'

export const LoginForm = () => {
  const form = useUserSlice((state) => state.form)
  const setForm = useUserSlice((state) => state.setForm)
  const login = useUserSlice((state) => state.login)

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center gap-x-2 h-screen">
      <label
        htmlFor="login"
        className="flex items-center justify-center gap-x-2"
      >
        <input
          type="text"
          id="login"
          required
          value={form.email}
          onChange={(e) => setForm(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <button
        onClick={() => {
          login().then((isLogin) => {
            if (!isLogin) return
            navigate('/home')
          })
        }}
        className="bg-sky-400 hover:bg-sky-300 text-white rounded px-2 py-1"
      >
        ログイン
      </button>
    </div>
  )
}
