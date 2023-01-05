import { API } from './axiosInstance'
import { DataType } from './types'
import axios from 'axios'
const signIn = async ({ email, password }: DataType) => {
  try {
    const res = await API({
      url: '/auth/signin',
      method: 'POST',
      data: {
        email,
        password,
      },
    })
    return res
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data.statusCode) {
      console.log(error.response?.data)
      if (error.response?.data.statusCode === 401) {
        alert('비밀번호를 확인해주세요')
      } else if (error.response?.data.statusCode === 404) {
        alert('이메일을 확인해주세요')
      } else {
        alert('서버에서 에러가 발생했습니다')
      }
    }
  }
}
export default signIn
