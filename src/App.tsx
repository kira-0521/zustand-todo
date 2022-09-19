import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { LoginForm } from './components/LoginForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
