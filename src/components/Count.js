import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('ListStore')
@observer
export default class Footer extends React.Component {
  render() {
    const { total } = this.props.ListStore;
    return <p>total: {total}</p>;
  }
}
