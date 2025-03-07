import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { createContext } from 'react'
import { useState } from 'react'
const themeContext = createContext()
createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<themeContext.Provider value={{}}>
			<App />
		</themeContext.Provider>
	</BrowserRouter>,
)
