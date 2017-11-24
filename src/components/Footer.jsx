import React from 'react'
import ReactDOM from 'react-dom'

export default class Footer extends React.Component {
  state = {
      count: 5
  }
  render() {
    var count = this.state.count
    return (
      <div>
        <h1>This is Footer{count}</h1>
      </div>
    );
  }
}