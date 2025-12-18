import { useState } from 'react'
import { Button } from '../../shared/Buttons/Button'

type Props = {
  onAdd: (text: string) => void
  onToggleForm: (form: 'addForm') => void
}
export const AddTodoForm = ({ onAdd, onToggleForm }: Props) => {
  const [value, setValue] = useState('')

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleAddTodo = () => {
    onAdd(value)
    onToggleForm('addForm')
  }

  return (
    <form
      className='flex flex-col p-5 w-96 bg-white border border-gray-200 rounded-xl'
      onSubmit={(e) => e.preventDefault()}
    >
      <label className='mb-2 '>Enter Task</label>
      <input
        className='p-2 mb-4 box-border border border-gray-200 bg-gray-50 rounded-lg'
        type='text'
        placeholder='Enter task...'
        value={value}
        onChange={handleChangeValue}
      />

      <Button onClick={handleAddTodo}>Add</Button>
    </form>
  )
}
