import { HashRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import LoadingScreen from './components/LoadingScreen'
import Victima from './pages/Home'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'

import './App.css'
import Registro from "./pages/Registro"

function App() {
  const loadingScreen = useSelector((state) => state.loadingScreen);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <HashRouter>
       <MyNav />
       {loadingScreen && <LoadingScreen />}
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
