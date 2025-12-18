import { useState } from 'react'

export const useShowForms = () => {
  const [showForms, setShowForms] = useState({
    addForm: false,
    editForm: false,
    filterForm: false,
  })

  const toggleForm = (form: keyof typeof showForms) => {
    setShowForms((prev) => ({
      ...prev,
      [form]: !prev[form],
    }))
  }

  return {
    showForms,
    toggleForm,
  }
}
