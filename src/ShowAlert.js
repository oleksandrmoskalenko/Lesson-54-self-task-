import React, { Component } from "react";

export default class ShowAlert extends Component {
  render() {
    let { name, age, showAlert } = this.props
    return (
      <button onClick={() => showAlert(name, age)}>ShowAlert</button>
    )
  }
}