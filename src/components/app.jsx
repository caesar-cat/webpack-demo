import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'

export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <p>This is the content.</p>
        </div>
        <Footer />  
      </div>
    );
  }
}