import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import configStore from './store/configStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <Home/>
  </Provider>
)

// ReactDOM.render(<Home/>, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));