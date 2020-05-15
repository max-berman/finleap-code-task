import React, { useState, useEffect } from 'react'

export default function List({
  userInput,
  showDropDown,
  filteredOptions,
  handleItemClick,
  activeOption,
}) {
  return (
    showDropDown &&
    userInput &&
    filteredOptions.length && (
      <ul className='dropDownList' data-testid='dropDown'>
        {filteredOptions.map(({ name, id }, i) => (
          <li
            key={i}
            onClick={() => handleItemClick(id)}
            className={i === activeOption ? 'active' : ''}
          >
            {name}
          </li>
        ))}
      </ul>
    )
  )
}
