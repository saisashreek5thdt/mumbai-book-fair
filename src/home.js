import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Speaker from './Components/speaker'

function Home() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/speaker" element={<Speaker />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Home
