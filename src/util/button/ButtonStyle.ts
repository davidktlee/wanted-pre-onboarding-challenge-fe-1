import styled from 'styled-components'

interface PropsType {
  width?: string
  height?: string
  margin?: string
}

export const Button = styled.button<PropsType>`
  width: ${({ width }) => (width ? width : '40px')};
  height: ${({ height }) => (height ? height : '20px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  background-color: #fff;
  color: #000;
  border: 1px solid pink;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: pink;
    color: #fff;
  }
  :disabled {
    cursor: default;
    background-color: #c9c9c9;
    color: #999;
    border: none;
    width: ${({ width }) => (width ? width : '40px')};
    height: ${({ height }) => (height ? height : '20px')};
  }
`
