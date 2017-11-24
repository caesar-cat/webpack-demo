import React from 'react'
import ReactDOM from 'react-dom'
import style from '../style/index.styl'
export default class Header extends React.Component {
 
  render() {
    console.log(style)
    return (
      <div>
        <h1 className={style.red}>This is Header</h1>
      </div>
    );
  }
} 