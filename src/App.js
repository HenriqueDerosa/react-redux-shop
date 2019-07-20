import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import history from './services/history';

import Routes from './routes';
import Header from './components/Header'

import './config/ReactotronConfig';
import store from './store';

function App() {
    return (
        <Provider store={store}>
        <Router history={history}>
            <GlobalStyle/>
            <Header />
            <Routes />
            <ToastContainer/>
        </Router>
        </Provider>
    );
}

export default App;
