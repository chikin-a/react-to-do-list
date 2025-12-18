import type { Todo } from '../../types/todo.types'
import EditIcon from '../../assets/icons/edit.svg'
import TrashIcon from '../../assets/icons/trash.svg'
import { IconButton } from '../../shared/Buttons/IconButton'

type Props = {
  onChangeStatus: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
} & Todo
export const TodoItem = ({
  id,
  text,
  isCompleted,
  onChangeStatus,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div
      className={`flex items-center gap-3 p-5 border rounded-xl border-gray-200 ${
        isCompleted ? 'bg-white/40' : 'bg-white'
      }`}
    >
      <input
        type='checkbox'
        className='accent-indigo-600 w-5 h-5 opacity-50 cursor-pointer'
        defaultChecked={isCompleted}
        onClick={() => onChangeStatus(id)}
      />
      <p className={`flex-1 ${isCompleted && 'line-through'}`}>{text}</p>

      <div className='flex gap-3'>
        {!isCompleted && (
          <IconButton
            onClick={() => onEdit(id)}
            src={EditIcon}
            alt='Edit to-do'
          />
        )}
        <IconButton
          color='danger'
          onClick={() => onDelete(id)}
          src={TrashIcon}
          alt='Delete to-do'
        />
      </div>
    </div>
  )
}
