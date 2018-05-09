import React from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { getUuid } from '../utils/utils';
import styles from '../style/index.less';

@inject('ListStore')
@observer
export default class List extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.ListStore.init();
  }

  componentWillReact() {
    console.log('observer data is changed:', toJS(this.props.ListStore.list));
  }

  handleClick() {
    this.props.ListStore.addNew();
  }

  render() {
    const { list } = this.props.ListStore;
    return (
      <div>
        {list.map((item: any) => <p key={getUuid()}>{item}</p>)}
        add item：<button className={styles.btn} onClick={this.handleClick}>(click me)</button>
      </div>
    );
  }
}
