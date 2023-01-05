import { TodoItemType } from '../../api/types'
import TodoItem from '../todoItem/TodoItem'
import * as S from './TodoListStyle'

interface PropsType {
  todoItemList: TodoItemType[]
}

function TodoList({ todoItemList }: PropsType) {
  return (
    <S.Container>
      {todoItemList &&
        todoItemList.map((item: TodoItemType, index: number) => (
          <TodoItem
            key={`${item.id}-${index}`}
            id={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            userId={item.userId}
          />
        ))}
    </S.Container>
  )
}

export default TodoList
