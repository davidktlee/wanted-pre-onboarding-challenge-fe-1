import React, { useMemo } from 'react'
import { TodoItemType } from '../../api/types'
import * as S from './TodoDetailStyle'

function TodoDetail({ id, todo, isCompleted, userId }: TodoItemType) {
  const complete = useMemo(() => {
    return isCompleted ? '완료' : '미완료'
  }, [isCompleted])

  return (
    <div>
      <div>작성자: {userId}</div>
      <div>완료 여부: {complete}</div>
    </div>
  )
}

export default TodoDetail
