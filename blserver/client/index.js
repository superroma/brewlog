import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/app'
//import configureStore from './store/configureStore'

//const store = configureStore()
//const history = syncHistoryWithStore(browserHistory, store)

render(
  <App/>,
  document.getElementById('app')
)