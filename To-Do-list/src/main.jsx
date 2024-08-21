import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDo from './TO-Do.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDo />
  </StrictMode>,
)
