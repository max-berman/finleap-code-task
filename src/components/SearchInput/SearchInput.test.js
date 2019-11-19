import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SearchInput from './SearchInput'

afterEach(cleanup)

describe('<SearchInput /> spec', () => {
  it('renders the component', () => {
    const container = render(<SearchInput />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows drop box with cities on input focus', () => {
    const setShowDropDown = jest.fn()
    const setUserInput = jest.fn()
    const { getByTestId } = render(
      <SearchInput
        setUserInput={setUserInput}
        setShowDropDown={setShowDropDown}
      />
    )
    fireEvent.focus(getByTestId('searchInput'))
    expect(expect(setShowDropDown).toHaveBeenCalledTimes(1))
    expect(expect(setUserInput).toHaveBeenCalledTimes(1))
  })
})
