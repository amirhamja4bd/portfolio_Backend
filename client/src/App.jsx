import { Fragment, useState , useContext } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { themeContext } from './Context'
import Home from './components/Home'
import Details from './components/Portfolio/Details'

function App() {
  const [count, setCount] = useState(0)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Fragment>
        <div
          className="App"
          style={{
            background: darkMode ? "var(--bg-dark-blue)" : "var(--bg-white)",
            color: darkMode ? "white" : "black",
          }}
        >
          <BrowserRouter>
            <Toaster position='top-right'/>
            <Routes>
              <Route path='/' element={ <Home/>} />
              <Route path='/project/:id' element={ <Details/>} />
            </Routes>
          </BrowserRouter>
        </div>
    </Fragment>
  )
}

export default App
