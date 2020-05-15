import React, { useState } from 'react'
import DropDown from './components/DropDown/DropDown'
import SearchResults from './components/SearchResults/SearchResults'
import SearchInput from './components/SearchInput/SearchInput'
import './App.css'
import { STRINGS } from '../src/config'
import fetchCity from './api/index'
import { uniqueBy } from './utils'

const { error, title } = STRINGS

function App() {
  const [userInput, setUserInput] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const [cityList, setCityList] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeOption, setActiveOption] = useState(0)
  const [filteredOptions, setFilteredOptions] = useState([])

  function handleItemClick(id) {
    setIsLoading(true)
    return fetchCity(id)
      .then(({ id, main: { temp_max, temp_min }, name }) => {
        setCityList((prevState) =>
          uniqueBy([
            ...prevState,
            {
              id,
              name,
              temp_max,
              temp_min,
            },
          ])
        )
        setUserInput(name)
      })
      .then(() => {
        setShowDropDown(!showDropDown)
        setIsLoading(false)
      })
      .catch((err) => setIsError(true))
  }

  const store = {
    userInput,
    setUserInput,
    showDropDown,
    setShowDropDown,
    cityList,
    setCityList,
    setIsError,
    setIsLoading,
    activeOption,
    setActiveOption,
    filteredOptions,
    setFilteredOptions,
    handleItemClick,
  }

  return (
    <div className='App'>
      <h1>{title}</h1>
      <form onSubmit={(e) => e.preventDefault()} className='search'>
        <SearchInput {...store} />
        {isLoading && !isError && <span className='spinner' />}
        <DropDown {...store} />
      </form>
      {isError ? <span>{error}</span> : <SearchResults {...store} />}
    </div>
  )
}

export default App
