import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
interface PropsType {
  isCompleted: boolean
}

export const TodoContent = styled.div<PropsType>`
  width: 200px;
  border: 1px solid pink;
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`
