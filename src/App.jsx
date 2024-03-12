import React from "react"
import { Route,Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Bin } from "./pages/bin"
function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bin" element={<Bin/>}/>
    </Routes>
  )
}

export default App
