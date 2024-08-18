import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './components/app'

const rootElement = document.querySelector('#root')
const reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(<App />)
