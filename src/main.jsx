import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './WeatherApp'
import '~/general.scss'
import { AppProvider } from './context/AppProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppProvider>
      <WeatherApp />
    </AppProvider>
  // </React.StrictMode>,
)
