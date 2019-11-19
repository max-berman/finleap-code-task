import React from 'react'
import { render, cleanup } from '@testing-library/react'
import SearchResults from './SearchResults'

afterEach(cleanup)

describe('<SearchResults /> spec', () => {
  it('renders the component', () => {
    const container = render(<SearchResults />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
