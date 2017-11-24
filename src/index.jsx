import 'react-hot-loader/patch';
import React from 'react';
import reactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

let render = Component => {
    reactDom.render((
        <AppContainer>
          <Component  />
        </AppContainer>
    ), document.getElementById('root'));
}

render(App)

if (module.hot) {
    module.hot.accept('./components/app', () => { render(App) })
}
