import React from 'react'
import { Route, Routes } from 'react-router'
import TodoDetail from '../components/todoDetail/TodoDetail'
import CheckUserPage from '../pages/mainSignIn/CheckUserPage'
import TodoPage from '../pages/todo/TodoPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckUserPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  )
}

export default Router
