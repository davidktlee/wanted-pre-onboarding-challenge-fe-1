import * as S from './ButtonStyle'
import React from 'react'
interface PropsType {
  width?: string
  height?: string
  disabled?: boolean
  children?: string
  onClick?: () => void
  margin?: string
}

const Button = ({ width, height, disabled, children, onClick, margin }: PropsType) => {
  return (
    <S.Button onClick={onClick} width={width} height={height} disabled={disabled}>
      {children}
    </S.Button>
  )
}
export default Button
