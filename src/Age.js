import React, { Component } from "react";

export default class Age extends Component {
  render() {
    let { age } = this.props
    return (
      <p>{age}</p>
    )
  }
}