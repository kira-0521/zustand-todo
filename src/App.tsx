import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { isNil } from 'lodash'

import { Home } from './components/Home'
import { LoginForm } from './components/LoginForm'
import { getCurrentUserByStorage } from './libs/storage/user'
import { useLogin } from './hooks/useLogin'

function App() {
  const navigate = useNavigate()
  const { setUser } = useLogin()

  useEffect(() => {
    const currentLoginUser = getCurrentUserByStorage()
    if (!isNil(currentLoginUser)) {
      setUser(currentLoginUser)
      navigate('/home')
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
