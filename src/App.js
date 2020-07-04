import React, { Component } from 'react';
import Person from './Person'

export default class App extends Component {
  state = {
    name: 'Oleksandr',
    age: 22
  }

  ShowAlert = (name, age) => {
    alert(`Name -  ${name}, age - ${age}`)
  }

  GetYearOlder = () => {
    this.setState({
      age: this.state.age + 1
    })

  }


  render() {
    let { name, age } = this.state
    return (
      <Person showAlert={this.ShowAlert} getYearOlder={this.GetYearOlder} name={name} age={age} />
    )
  }
}