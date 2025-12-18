import { useState } from 'react'
import { Button } from '../../shared/Buttons/Button'

type Props = {
  id: string
  text: string
  onEdit: (id: string, text: string) => void
  onToggleForm: (form: 'editForm') => void
}
export const EditTodoForm = ({ id, text, onEdit, onToggleForm }: Props) => {
  const [value, setValue] = useState(text)

  const handleChangeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const handleSaveTodo = () => {
    onEdit(id, value)
    onToggleForm('editForm')
  }

  return (
    <form
      className='flex flex-col p-5 w-96 bg-white border border-gray-200 rounded-xl'
      onSubmit={(e) => e.preventDefault()}
    >
      <label className='mb-2 '>Change Task</label>
      <textarea
        rows={5}
        className='p-2 mb-4 box-border border border-gray-200 resize-none bg-gray-50 rounded-lg'
        placeholder='Enter new task...'
        value={value}
        onChange={handleChangeValue}
      ></textarea>

      <Button onClick={handleSaveTodo}>Save</Button>
    </form>
  )
}
