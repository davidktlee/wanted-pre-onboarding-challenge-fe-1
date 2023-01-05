import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import TodoList from '../../components/todoList/TodoList'
import Input from '../../util/input/Input'
import * as S from './TodoPageStyle'
import Button from '../../util/button/Button'
import { createTodo, getTodo } from '../../api/todo'
import { TodoItemType } from '../../api/types'
import { all } from 'axios'

function TodoPage() {
  const navigate = useNavigate()
  const [todoInput, setTodoInput] = useState('')
  const [todoItemList, setTodoItemList] = useState<TodoItemType[] | []>([])

  const getTodoList = async () => {
    const res = await getTodo()
    setTodoItemList(res?.data)
    console.log(res)
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.currentTarget.value)
  }
  const submitTodo = async () => {
    await createTodo(todoInput)
    getTodoList()
    setTodoInput((prev) => (prev = ''))
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }
    getTodoList()
  }, [])
  return (
    <S.Wrapper>
      <S.Container>
        <S.InputContainer>
          <Input
            onChange={onChangeInput}
            type="text"
            name="todo"
            value={todoInput}
            placeholder="투두를 입력하세요."
            width="200px"
            height="30px"
            radius="10px"
          />
          <Button width="60px" height="30px" onClick={submitTodo}>
            추가
          </Button>
        </S.InputContainer>
        <TodoList todoItemList={todoItemList} />
      </S.Container>
    </S.Wrapper>
  )
}
export default TodoPage
