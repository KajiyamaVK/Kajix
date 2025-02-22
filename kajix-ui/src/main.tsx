import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/config'  // Import i18n configuration
import './global.css'  // Import Tailwind styles
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
