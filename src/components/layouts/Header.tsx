import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const { isLogin, onClickLogout } = useLogin()

  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-end p-6">
      <button onClick={isLogin ? onClickLogout : () => navigate('/')}>
        {isLogin ? (
          <div className="flex gap-x-2 text-gray-500">
            <span>Logout</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        ) : (
          <div className="flex gap-x-2 text-gray-500">
            <span>Login</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </div>
        )}
      </button>
    </header>
  )
}
