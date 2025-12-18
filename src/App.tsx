import { useEffect, useState } from 'react'
import { useTodos } from './hooks/useTodos'
import { useShowForms } from './hooks/useShowForms'
import { AddTodoForm } from './components/Forms/AddTodoForm'
import { EditTodoForm } from './components/Forms/EditTodoForm'
import { FilterTodoForm } from './components/Forms/FilterTodoForm'
import { TodoList } from './components/TodoList/TodoList'
import { Header } from './components/Header/Header'
import type { Todo } from './types/todo.types'

export const App = () => {
  const {
    todos,
    addTodo,
    editTodo,
    toggleTodoStatus,
    deleteTodo,
    filterTodos,
  } = useTodos()
  const { showForms, toggleForm } = useShowForms()
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)
  const [filteredTodos, setFilteredTodo] = useState<Todo[]>([])

  const handleEditTodo = (id: string) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) setEditingTodo(todo)
    toggleForm('editForm')
  }

  const handleFilterTodo = (text: string, isCompleted?: boolean) => {
    setFilteredTodo(filterTodos(text, isCompleted))
    toggleForm('filterForm')
  }

  const handleResetFilter = () => {
    setFilteredTodo([])
  }

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='max-w-4xl mx-auto'>
      {showForms.editForm && (
        <div className='absolute w-full h-full flex items-center justify-center bg-black/50 top-0 left-0 z-10 scroll-'>
          {editingTodo && (
            <EditTodoForm
              id={editingTodo.id}
              text={editingTodo.text}
              onEdit={editTodo}
              onToggleForm={toggleForm}
            />
          )}
        </div>
      )}

      {showForms.addForm && (
        <div className='absolute w-full h-full flex items-center justify-center bg-black/50 top-0 left-0 z-10'>
          <AddTodoForm onAdd={addTodo} onToggleForm={toggleForm} />
        </div>
      )}

      {showForms.filterForm && (
        <div className='absolute w-full h-full flex items-center justify-center bg-black/50 top-0 left-0 z-10'>
          <FilterTodoForm
            onFilter={handleFilterTodo}
            onToggleForm={toggleForm}
          />
        </div>
      )}

      <Header
        filterStatus={filteredTodos.length ? 'applied' : 'disabled'}
        onResetFilter={handleResetFilter}
        onToggle={toggleForm}
      />

      {filteredTodos.length ? (
        <TodoList
          todos={filteredTodos}
          filter='all'
          onEdit={handleEditTodo}
          onChangeStatus={toggleTodoStatus}
          onDelete={deleteTodo}
        />
      ) : (
        <>
          <TodoList
            todos={todos}
            onEdit={handleEditTodo}
            onChangeStatus={toggleTodoStatus}
            onDelete={deleteTodo}
          />
          <TodoList
            todos={todos}
            filter='completed'
            onEdit={handleEditTodo}
            onChangeStatus={toggleTodoStatus}
            onDelete={deleteTodo}
          />
        </>
      )}
    </div>
  )
}
