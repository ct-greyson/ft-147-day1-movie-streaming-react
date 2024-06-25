import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import UserContext from './context/UserContext'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState({name: '', isLoggedIn: false})
  

  return (
    <>
      {/* Providing our context to give our entire application access to our user state */}
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
