import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import AllData from './AllData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllData />
  </StrictMode>,
)
