import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getTodo, PutTodo } from '../../api/todo'
import { TodoItemType } from '../../api/types'
import Button from '../../util/button/Button'
import Input from '../../util/input/Input'
import TodoDetail from '../todoDetail/TodoDetail'
import * as S from './TodoItemStyle'

function TodoItem({ id, todo, isCompleted, userId }: TodoItemType) {
  const [searchParams, setSearchParams] = useSearchParams()
  const qs = Number(searchParams.get('todoId'))
  const [isModifyMode, setIsModifyMode] = useState(false)
  const [todoInput, setTodoInput] = useState({
    todo,
    isCompleted,
  })
  const toTodoDetail = () => {
    setSearchParams(`todoId=${id}`)
  }

  const changeisCompleted = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (todoInput.isCompleted) {
      setTodoInput({ ...todoInput, isCompleted: false })
    } else if (!todoInput.isCompleted) {
      setTodoInput({ ...todoInput, todo, isCompleted: true })
    }
  }
  const modifyTodo = async () => {
    setIsModifyMode((prev) => (prev = false))
    // 수정 된 todo 보내기
    if (todo === todoInput.todo) return
    const res = await PutTodo({ todoInput, id })
    setTodoInput({ ...todoInput, todo: res?.data.todo, isCompleted: res?.data.isCompleted })
  }
  const changeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setTodoInput({ ...todoInput, todo: value })
  }
  const changeModifyMode = () => {
    setIsModifyMode((prev) => !prev)
  }
  const deleteTodo = (id: number) => {
    // todo 삭제 로직
  }
  useEffect(() => {
    modifyTodo()
  }, [todoInput.todo, todoInput.isCompleted])
  return (
    <S.Container>
      {!isModifyMode ? (
        <>
          <Input
            type="checkbox"
            onChange={(e) => changeisCompleted(e)}
            checked={todoInput.isCompleted}
            width="40px"
          />
          <div>{todoInput.isCompleted}</div>
          <S.TodoContent
            title="자세히 보기"
            onClick={toTodoDetail}
            isCompleted={todoInput.isCompleted}
          >
            {todoInput.todo}
          </S.TodoContent>
          <div>
            {qs === id ? (
              <TodoDetail id={id} todo={todo} isCompleted={isCompleted} userId={userId} />
            ) : null}
          </div>
          <Button margin="0 5px" onClick={changeModifyMode}>
            수정
          </Button>
          <Button onClick={() => deleteTodo(id)}>삭제</Button>
        </>
      ) : (
        <>
          <div>{todoInput.isCompleted}</div>
          <Input
            type="text"
            value={todoInput.todo}
            onChange={changeTodoInput}
            width="200px"
            height="30px"
            radius="5px"
          />
          <Button margin="0 5px" onClick={modifyTodo}>
            확인
          </Button>
          <Button onClick={changeModifyMode}>취소</Button>
        </>
      )}
    </S.Container>
  )
}

export default TodoItem
