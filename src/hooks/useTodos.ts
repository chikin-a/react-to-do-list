import { useState } from 'react'
import type { Todo } from '../types/todo.types'

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const stored = localStorage.getItem('todoData')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const addTodo = (text: string) => {
    if (!text.trim()) return

    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text,
        isCompleted: false,
      },
    ])
  }

  const updateTodo = (id: string, updater: (todo: Todo) => Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updater(todo) : todo))
    )
  }

  const toggleTodoStatus = (id: string) => {
    updateTodo(id, (todo) => ({
      ...todo,
      isCompleted: !todo.isCompleted,
    }))
  }

  const editTodo = (id: string, text: string) => {
    updateTodo(id, (todo) => ({
      ...todo,
      text,
    }))
  }

  const deleteTodo = (id: string) => {
    setTodos((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id))
  }

  const filterTodos = (text: string, isCompleted?: boolean): Todo[] => {
    console.log({ text, isCompleted })

    if (isCompleted === undefined) {
      return todos.filter((todo) =>
        todo.text.toLowerCase().includes(text.toLowerCase())
      )
    } else {
      return todos.filter(
        (todo) =>
          todo.isCompleted === isCompleted &&
          todo.text.toLowerCase().includes(text.toLowerCase())
      )
    }
  }

  return {
    todos,
    addTodo,
    toggleTodoStatus,
    editTodo,
    deleteTodo,
    filterTodos,
  }
}
