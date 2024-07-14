import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './common/Sidebar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sidebar></Sidebar>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
