import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const header = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
const header_a = {
    color: '#fff',
    paddingRight: '5px'
}


class Header extends Component {
  render() {
    return (
        <header style={header}>
            <h1>Todo List</h1>
            <div id="nav">
                <Link to="/" style={header_a}>Home</Link> | <Link to="/about" style={header_a}>About</Link>
            </div>
        </header>
    );
  }
}

export default Header;