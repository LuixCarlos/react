import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();
    this.state = {
      count:0,
      num1:0,
      num2:0,
      result:0
    };

    this.handleCountClik = this.handleCountClik.bind(this);
    this.handleResultClik = this.handleResultClik.bind(this);
    this.handleAtualizaVal = this.handleAtualizaVal.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      count:1
    });
  }

  handleCountClik(element){
    switch(element.target.id){
      case "add":
        this.setState({count:this.state.count+1});
        break;
      case "remove":
        this.setState({count:this.state.count-1});
        break;
      default:
        this.setState({count:0});
    }
  }

  handleResultClik(element){
      this.setState({
          result: this.state.num1 + this.state.num2
      })
  }

  handleAtualizaVal(element){
    switch(element.target.id){
        case "num1":
          this.setState({num1: Number(element.target.value)});
          break;
        case "num2":
          this.setState({num2: Number(element.target.value)});
          break;
    }
  }

  render() {
    return (
      <div className="Content">
        <h2>Contador: { this.state.count}</h2>
        <p>
          <button id="add" onClick={ this.handleCountClik}>+</button>
          <button id="remove" onClick={ this.handleCountClik}>-</button>
          <button id="reset" onClick={ this.handleCountClik}>Reset</button>
        </p>
        <br></br>

        <h1>Cálculos:</h1>
        <input id="num1" type="number" value={this.state.num1} onChange={this.handleAtualizaVal}/>
        +
        <input id="num2" type="number" value={this.state.num2} onChange={this.handleAtualizaVal}/>
        =
        <input id="result" type="number" value={this.state.result} onChange={this.handleAtualizaVal}/>
        <br></br>

        <button id="calcular" onClick={ this.handleResultClik}>Calcular</button>


      </div>
    );
  }
}

export default Content;
