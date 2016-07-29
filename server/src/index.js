import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App';
import {BatchesView} from './BatchesView'
import {
  Home,
  InventoryView,
  SettingsView,
} from './Stubs'
import {BatchDetailView} from './BatchDetailView'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="batches" component={BatchesView}/>
      <Route path="batchdetails" component={BatchDetailView}/>
      <Route path="Inventory" component={InventoryView}/>
      <Route path="Settings" component={SettingsView}/>
    </Route>
  </Router>
  , document.getElementById('root'));

  module.hot.accept();