import type { Todo } from '../../types/todo.types'
import { TodoItem } from '../TodoItem/TodoItem'

type Props = {
  todos: Todo[]
  filter?: 'active' | 'completed' | 'all'
  onChangeStatus: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}
export const TodoList = ({
  todos,
  filter = 'active',
  onChangeStatus,
  onEdit,
  onDelete,
}: Props) => {
  const filteredTodos = todos.filter((todo) =>
    filter === 'all'
      ? todo
      : filter === 'active'
      ? !todo.isCompleted
      : todo.isCompleted
  )

  return (
    <div className='flex flex-col gap-2 mb-4'>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onChangeStatus={onChangeStatus}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
