import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        ,
        document.getElementById('root')
    );
};

rerenderEntireTree();

// store.subscribe(() => {
//     rerenderEntireTree();
// });

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();