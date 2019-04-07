import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './configureStore';
import App from './App';

import  {createBrowserHistory} from 'history';

const history = createBrowserHistory({basename: '/'});

const store = configureStore({initialState: {}, history});

ReactDOM.render(
   <Provider store={store}>
      <App history={history}/>
   </Provider>,
   document.getElementById('container')
);
