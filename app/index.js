import  React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/appview';
import {loadList} from './actions/index';

const store = configureStore();
store.dispatch(loadList());

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("container")
);