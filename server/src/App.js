import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
//import {BatchesView} from './BatchesView'

const NavLink = (props) => (
  <Link {...props} className="nav-item nav-link" activeClassName="active"/>
)

const NavBar = () => (
  <nav className="navbar navbar-dark bg-inverse">
    <div className="nav navbar-nav">
      <a className="navbar-brand" href="/">Brew Log</a>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/batches">Batches</NavLink>
      <NavLink to="/batchdetails">Batch Details</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  </nav>
)

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {children: PropTypes.object.isRequired}