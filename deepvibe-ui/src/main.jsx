import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import App from './App.jsx'

function Root() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 })
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
