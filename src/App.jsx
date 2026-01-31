import './App.css'
import Home from './Routes/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from "./Routes/Contact"
import { Link } from 'react-router-dom';
import Photos from './Routes/Photos';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
