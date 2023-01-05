import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import signIn from '../../api/signIn'
import signUp from '../../api/signUp'
import { DataType } from '../../api/types'
import Button from '../../util/button/Button'
import Input from '../../util/input/Input'
import * as S from './CheckUserPageStyle'

function CheckUserPage() {
  const navigate = useNavigate()
  const [changeSignUpState, setChangeSignUpState] = useState(false)
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [errorText, setErrorText] = useState('')
  const [userInput, setUserInput] = useState<DataType>({
    email: '',
    password: '',
  })
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (changeSignUpState) {
      await signUp(userInput)
    } else {
      const res = await signIn(userInput)
      localStorage.setItem('token', res?.data.access_token)
      navigate('/todo')
    }
    setUserInput({ ...userInput, email: '', password: '' })
  }

  const changeToSignUp = () => {
    setChangeSignUpState((prev) => !prev)
  }

  useEffect(() => {
    if (userInput.email === '') {
      setErrorText((prev) => (prev = '이메일을 입력해주세요'))
      setIsButtonDisable((prev) => (prev = true))
      return
    } else if (!userInput.email.includes('@')) {
      setErrorText((prev) => (prev = '이메일 형식을 확인해주세요'))
      setIsButtonDisable((prev) => (prev = true))
      return
    } else if (userInput.password === '') {
      setErrorText((prev) => (prev = '패스워드를 입력해주세요'))
      setIsButtonDisable((prev) => (prev = true))
      return
    } else if (userInput.password.length <= 8) {
      setErrorText((prev) => (prev = '패스워드를 8자 이상 입력해주세요'))
      setIsButtonDisable((prev) => (prev = true))
      return
    }
    setErrorText((prev) => (prev = ''))
    setIsButtonDisable((prev) => (prev = false))
  }, [userInput])

  useEffect(() => {
    setUserInput({ ...userInput, email: '', password: '' })
    setErrorText((prev) => (prev = ''))
    setIsButtonDisable(true)
  }, [changeSignUpState])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo')
    }
  }, [])
  return (
    <S.Wrapper>
      <S.Container>
        <h1>{changeSignUpState ? '회원가입' : '로그인'}</h1>
        {!changeSignUpState ? (
          <S.FormContainer onSubmit={submitForm}>
            <Input
              required={true}
              onChange={changeInputHandler}
              type="text"
              name="email"
              value={userInput.email}
              placeholder="email를 입력해주세요."
            />
            <Input
              required={true}
              onChange={changeInputHandler}
              type="password"
              name="password"
              value={userInput.password}
              placeholder="password를 입력해주세요."
            />
            <S.ErrorText>{errorText}</S.ErrorText>
            <Button width="120px" height="30px" disabled={isButtonDisable}>
              로그인 하기
            </Button>
          </S.FormContainer>
        ) : (
          <S.FormContainer onSubmit={submitForm}>
            <Input
              required={true}
              onChange={changeInputHandler}
              type="text"
              name="email"
              value={userInput.email}
              placeholder="email를 입력해주세요."
            />
            <Input
              required={true}
              onChange={changeInputHandler}
              type="password"
              name="password"
              value={userInput.password}
              placeholder="password를 입력해주세요."
            />
            <S.ErrorText>{errorText}</S.ErrorText>
            <Button width="120px" height="30px" disabled={isButtonDisable}>
              회원가입 하기
            </Button>
          </S.FormContainer>
        )}
        <Button onClick={changeToSignUp} width="120px" height="25px">
          {!changeSignUpState ? '회원가입 하기' : '로그인 하기'}
        </Button>
      </S.Container>
    </S.Wrapper>
  )
}

export default CheckUserPage
