import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TuiloProvider from "./contexts/TuiloProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TuiloProvider>
        <App />
    </TuiloProvider>
  </StrictMode>,
)
