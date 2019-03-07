import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
//自定义组件
import ContactsApp from './components/SearchContacts/ContactsApp';
//c撤销历史
import HistoryTodoApp from "./components/ReactRedux/index"
import {LightsApp} from "./components/CationLights/Components/lightsApp";
import {lightStore} from "./components/CationLights/Components/store";

import {CombineLights, store2} from "./components/CationLights/Components/Combines";


import {storeBooks} from "./components/BooksSearch/store";
import {BooksSearch} from "./components/BooksSearch/index";
import {AppAsync} from "./components/AsyncReducers/index";


//
ReactDOM.render(
    <HistoryTodoApp />,
    document.getElementById('root'));

ReactDOM.render(<ContactsApp />, document.getElementById('searchcontacts'));

//ReactDOM.render(<CationsLight />, document.getElementById('cationlight'));

ReactDOM.render(
    <Provider store={lightStore}>
        <LightsApp />
    </Provider>,
    document.getElementById('cationlight'));
ReactDOM.render(
    <Provider store={store2}>
        <CombineLights />
    </Provider>,
    document.getElementById('cationlight2'));
ReactDOM.render(
    <Provider store={storeBooks}>
        <BooksSearch />
    </Provider>,
    document.getElementById('books'));
ReactDOM.render(
    <AppAsync />,
    document.getElementById('reddits'));
















// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
