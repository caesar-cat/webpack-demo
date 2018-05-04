import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

const render = (Component: any) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>
    , document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => { render(App); });
}
