import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';
import stores from './store';

const render = (Component: any) => {
  ReactDom.render(
    <AppContainer>
      <Provider {...stores}>
        <Component />
      </Provider>
    </AppContainer>
    , document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => { render(App); });
}
