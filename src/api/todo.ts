import axios from 'axios'
import { API } from './axiosInstance'
import { PutTodoDataType } from './types'

export const createTodo = async (todo: string) => {
  const token = localStorage.getItem('token')
  try {
    await API({
      url: '/todos',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        todo,
      },
    })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message)
    }
  }
}

export const getTodo = async () => {
  const token = localStorage.getItem('token')
  try {
    const res = await API({
      url: '/todos',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message)
    }
  }
}

export const PutTodo = async ({ todoInput, id }: PutTodoDataType) => {
  const token = localStorage.getItem('token')
  try {
    const res = await API({
      url: `/todos/${id}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        todo: todoInput.todo,
        isCompleted: todoInput.isCompleted,
      },
    })
    return res
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message)
    }
  }
}
