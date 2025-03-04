import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const colors = [
  'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-teal-500',
  'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'
];
createRoot(document.getElementById('root')).render(

    <App />

)
