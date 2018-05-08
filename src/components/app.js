import React from 'react';
import Count from './Count';
import List from './List';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <List />
        <Count />
      </div>
    );
  }
}
