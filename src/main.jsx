import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clicker from './Clicker.jsx'

const name0 = 'Rose'
const name1 = 'Lan'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>{name0} and {name1} VS SURF!</h2>
    <Clicker />
  </StrictMode>,
)
