import React, { useState } from 'react'
import DropDown from './components/DropDown/DropDown'
import SearchResults from './components/SearchResults/SearchResults'
import SearchInput from './components/SearchInput/SearchInput'
import './App.css'
import { STRINGS } from '../src/config'

const { error, title } = STRINGS

function App() {
  const [userInput, setUserInput] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const [cityList, setCityList] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const store = {
    userInput,
    setUserInput,
    showDropDown,
    setShowDropDown,
    cityList,
    setCityList,
    setIsError,
    setIsLoading
  }

  return (
    <div className='App'>
      <h1>{title}</h1>
      <form onSubmit={e => e.preventDefault()} className='search'>
        <SearchInput {...store} />
        {isLoading && !isError && <span className='spinner' />}
        <DropDown {...store} />
      </form>
      {isError ? <span>{error}</span> : <SearchResults {...store} />}
    </div>
  )
}

export default App
