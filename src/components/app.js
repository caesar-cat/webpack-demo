import React from 'react';
import Footer from './Footer';

export default class App extends React.Component {
  constructor() {
    super();
    this.a = 123;
  }

  handleFn(b: number) {
    /* eslint-disable-next-line */
    console.log(this.a + b);
  }

  render() {
    this.handleFn(1);
    return (
      <div>
        <div>
          <p>This is the content.</p>
        </div>
        <Footer />
      </div>
    );
  }
}
