import styled from 'styled-components'

interface PropsType {
  width?: string
  height?: string
  radius?: string
}

export const Input = styled.input<PropsType>`
  width: ${({ width }) => (width ? width : '200px')};
  height: ${({ height }) => (height ? height : '20px')};
  margin: 5px;
  padding: 2px 0px 2px 4px;
  color: #555;
  border: 1px solid pink;
  border-radius: ${({ radius }) => (radius ? radius : '0px')};
  ::placeholder {
    color: #555;
  }
`
