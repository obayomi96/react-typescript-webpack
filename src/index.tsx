import React from 'react'
import ReactDOM from 'react-dom'

export default function App(): JSX.Element {
  return (
    <h2>
      React Typescript Webpack Setup
    </h2>
  )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)
