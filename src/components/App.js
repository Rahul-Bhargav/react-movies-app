import React from 'react'
import '../styles/App.css'
import Container from './Container'
const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h2>This Weeks Movies</h2>
      </div>
      <Container />
    </div>
  )
}

export default App
