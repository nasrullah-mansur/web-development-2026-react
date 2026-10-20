import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import './index.css'
import CounterProvider from './providers/CounterProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
    <ToastContainer />
  </StrictMode>,
)

