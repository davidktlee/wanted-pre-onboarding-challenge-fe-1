import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`
export const Container = styled.div`
  width: 600px;

  margin: 0 auto;
  border: 1px solid pink;
  border-radius: 10px;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TapContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

interface TabItemPropsType {
  borderBottom: boolean
}
export const TabItem = styled.span<TabItemPropsType>`
  width: 200px;
  margin: 20px;
  border-bottom: ${({ borderBottom }) => (borderBottom ? '1px solid pink' : 'none')};
  cursor: pointer;
  text-align: center;
`
