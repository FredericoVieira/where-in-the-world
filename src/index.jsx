import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './styles/app.scss'
import 'materialize-loader'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)

if(module.hot) // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
