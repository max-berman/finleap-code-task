import React from 'react'
import { render, cleanup } from '@testing-library/react'
import DropDown from './DropDown'

afterEach(cleanup)

describe('<DropDown /> spec', () => {
  it('renders the component', () => {
    const container = render(<DropDown />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
