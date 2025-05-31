import React from 'react'

const FormField = ({id, label, type = "text", value, onChange, placeholder, as = 'input', options = []}: FormFieldProps) => {
    const InputToRender = (type) => {
        if(type ==='textarea') {
            return <textarea />
        } else if(type === 'select'){
            return <select />
        }
    }
  return (
    <div className='form-field'>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FormField