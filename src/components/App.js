// Dependencies
import React, {Component} from 'react';

// components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// Data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Estudo React" items={items}/>
        <Content/>
        <Footer copyright="&copy; Estudo React 2017"/>
      </div>
    );
  }
}

export default App;
