import React, { useEffect } from 'react'
import { STRINGS } from '../../config'
import { CITIES } from '../../cities'
// https://codesandbox.io/s/ojr02w7x55?from-embed=&file=/src/Autocomplete.js

export default function SearchInput({
  userInput,
  setUserInput,
  setShowDropDown,
  showDropDown,
  activeOption,
  setActiveOption,
  filteredOptions,
  setFilteredOptions,
  handleItemClick,
}) {
  useEffect(() => {
    console.log(activeOption)
  }, [activeOption])

  function handleChange({ target: { value } }) {
    setUserInput(value)
    setShowDropDown(true)
    setFilteredOptions(
      CITIES.filter(
        (res) => res.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
    )
  }
  function onKeyDown(e) {
    const { keyCode } = e
    console.log(filteredOptions[activeOption])
    if (keyCode === 13) {
      setActiveOption(0)
      setUserInput(filteredOptions[activeOption].name)
      handleItemClick(filteredOptions[activeOption].id)
      setShowDropDown(false)
    } else if (keyCode === 38) {
      if (activeOption === 0) {
        return
      }
      setActiveOption(activeOption - 1)
    } else if (keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return
      }
      setActiveOption(activeOption + 1)
    }
  }

  return (
    <div>
      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder={STRINGS.input_placeholder}
        data-testid='searchInput'
      />
    </div>
  )
}
