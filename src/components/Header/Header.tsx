import { Button } from '../../shared/Buttons/Button'
import PlusIcon from './../../assets/icons/plus.svg'
import FilterIcon from './../../assets/icons/filter.svg'
import CloseIcon from './../../assets/icons/close.svg'

type Props = {
  filterStatus: 'applied' | 'disabled'
  onResetFilter: () => void
  onToggle: (form: 'addForm' | 'editForm' | 'filterForm') => void
}
export const Header = ({ filterStatus, onToggle, onResetFilter }: Props) => {
  return (
    <div className='flex gap-3 mb-4 mt-4'>
      <Button onClick={() => onToggle('addForm')} icon={PlusIcon}>
        New To-Do
      </Button>

      <Button
        color='secondary'
        onClick={() => onToggle('filterForm')}
        icon={FilterIcon}
      >
        Filters
      </Button>

      {filterStatus === 'applied' && (
        <Button color='secondary' onClick={onResetFilter} icon={CloseIcon}>
          Reset
        </Button>
      )}
    </div>
  )
}
