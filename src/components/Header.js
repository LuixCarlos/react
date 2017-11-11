import React, { Component } from 'react';
import logo from './imagens/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem Vindo ao React</h1>
        </div>
      </div>
    );
  }
}

export default Header;