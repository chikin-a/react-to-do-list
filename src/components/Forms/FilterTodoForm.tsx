import { useState } from 'react'
import { Button } from '../../shared/Buttons/Button'

type Props = {
  onFilter: (text: string, isCompleted?: boolean) => void
  onToggleForm: (form: 'filterForm') => void
}
export const FilterTodoForm = ({ onFilter }: Props) => {
  const [filterValue, setFilterValue] = useState('')
  const [activeTab, setActiveTab] = useState<
    'all' | 'in-progress' | 'completed'
  >('all')

  const toggleActiveTab = (tab: 'all' | 'in-progress' | 'completed') => {
    setActiveTab(tab)
  }

  const handleFiltered = () => {
    if (activeTab === 'all') {
      onFilter(filterValue)
    } else {
      const filteredStatus = activeTab === 'completed' ? true : false
      onFilter(filterValue, filteredStatus)
    }
  }

  const activeTabStyle = 'bg-indigo-600 text-white border-indigo-600'

  return (
    <form
      className='flex flex-col p-5 w-96 bg-white border border-gray-200 rounded-xl'
      onSubmit={(e) => e.preventDefault()}
    >
      <label className='mb-2'>Filter</label>
      <input
        className='p-2 mb-2 box-border border border-gray-200 bg-gray-50 rounded-lg'
        type='text'
        placeholder='Enter word...'
        value={filterValue}
        onChange={(e) => setFilterValue(() => e.target.value)}
      />

      <div className='flex justify-between mb-4'>
        <button
          className={`flex-1 p-2 border border-gray-200 rounded-l-lg cursor-pointer ${
            activeTab === 'all' && activeTabStyle
          }`}
          onClick={() => toggleActiveTab('all')}
        >
          All
        </button>
        <button
          className={`flex-1 p-2 border-y border-gray-200 cursor-pointer ${
            activeTab === 'in-progress' && activeTabStyle
          }`}
          onClick={() => toggleActiveTab('in-progress')}
        >
          In-Progress
        </button>
        <button
          className={`flex-1 p-2 border border-gray-200 rounded-r-lg cursor-pointer ${
            activeTab === 'completed' && activeTabStyle
          }`}
          onClick={() => toggleActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      <Button onClick={handleFiltered}>Apply</Button>
    </form>
  )
}
