export interface DataType {
  email: string
  password: string
}

export interface TodoItemType {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export interface PutTodoDataType {
  id: number
  todoInput: {
    todo: string
    isCompleted: boolean
  }
}