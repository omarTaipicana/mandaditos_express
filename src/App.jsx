import { HashRouter, Routes, Route } from "react-router-dom"
import Victima from './pages/Home'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'

import './App.css'
import Registro from "./pages/Registro"

function App() {

  return (
    <div className="App">
      <HashRouter>
       <MyNav />
          <Routes>        
            <Route path='/' element={<Victima />} />
            <Route path="/registro" element={<Registro/>} />
          </Routes>
      <MyFooter/>
      </HashRouter>
    </div>
  )
}

export default App
