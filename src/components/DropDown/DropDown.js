import React from 'react'
import { CITIES } from '../../cities'
import fetchCity from '../../api'
import { uniqueBy } from '../../utils'

export default function List({
  userInput,
  setUserInput,
  setCityList,
  setShowDropDown,
  showDropDown,
  setIsError,
  setIsLoading
}) {
  function handleItemClick(id) {
    setIsLoading(true)
    return fetchCity(id)
      .then(({ id, main: { temp_max, temp_min }, name }) => {
        setCityList(prevState =>
          uniqueBy([
            ...prevState,
            {
              id,
              name,
              temp_max,
              temp_min
            }
          ])
        )
        setUserInput(name)
      })
      .then(() => {
        setShowDropDown(!showDropDown)
        setIsLoading(false)
      })
      .catch(err => setIsError(true))
  }

  return showDropDown ? (
    <ul className='dropDownList' data-testid='dropDown'>
      {CITIES.filter(
        res => res.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      ).map(({ name, id }, i) => (
        <li key={i} onClick={() => handleItemClick(id)}>
          {name}
        </li>
      ))}
    </ul>
  ) : null
}
