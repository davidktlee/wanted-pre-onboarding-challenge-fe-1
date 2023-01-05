import { API } from './axiosInstance'
import { DataType } from './types'
import axios from 'axios'
const signUp = async ({ email, password }: DataType) => {
  try {
    const res = await API({
      url: '/auth/signup',
      method: 'POST',
      data: {
        email,
        password,
      },
    })
    return res
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data.statusCode) {
      console.log(error)
    }
  }
}

export default signUp
