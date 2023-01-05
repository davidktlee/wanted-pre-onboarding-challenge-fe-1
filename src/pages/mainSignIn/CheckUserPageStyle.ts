import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`
export const Container = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid pink;
  border-radius: 10px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 20px;
`

export const ErrorText = styled.span`
  color: red;
  text-align: center;
  margin: 10px 0;
`
