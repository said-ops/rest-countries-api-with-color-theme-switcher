import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import Details from './Details'

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/details/:name' element={<Details/>} />
    </Routes>
   </Router>
     
   </>
  )
}

export default App