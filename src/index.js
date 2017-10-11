import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <RootContainer />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();