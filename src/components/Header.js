//Dependencies
import React, { Component } from 'react';
import PropTypes from "prop-types";

//Assets
import logo from './imagens/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
    const { title, items } = this.props;
    //const title = this.prop.title;
    //const items = this.prop.items;
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem Vindo { title }</h1>
          <ul className ="Menu">
            { items && items.map((item, key) => <li key={ key }>{ item.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
