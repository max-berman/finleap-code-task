import React from 'react'
import { STRINGS } from '../../config'

export default function SearchInput({
  userInput,
  setUserInput,
  setShowDropDown,
  showDropDown
}) {
  function handleChange({ target: { value } }) {
    setUserInput(value)
  }
  function hanndleOnFocus() {
    setShowDropDown(!showDropDown)
    setUserInput('')
  }
  function hanndleOnBlur() {
    setTimeout(() => setShowDropDown(!showDropDown), 100)
  }

  return (
    <div>
      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        onFocus={hanndleOnFocus}
        onBlur={hanndleOnBlur}
        placeholder={STRINGS.input_placeholder}
      />
    </div>
  )
}
