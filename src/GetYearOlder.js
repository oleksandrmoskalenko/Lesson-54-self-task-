import React, { Component } from 'react';

export default class GetYearOlder extends Component {
  render() {
    let { age, getYearOlder } = this.props
    return (
      <button onClick={
        () => getYearOlder(age)
      }>GetYearOlder</button>
    )
  }
}