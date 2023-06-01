import { useState } from 'react'
import './App.css'
import Users from './components/users/Users'
import {Routes, Route} from 'react-router-dom'
import SingleUser from './components/users/SingleUser'
import NewUser from './components/users/NewUser'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/single-user/:id" element={<SingleUser />}></Route>
        <Route path="/new-user" element={<NewUser /> }  />
      </Routes>
        
    </>
  )
}

export default App
