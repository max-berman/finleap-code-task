import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './App'

it('Index renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
