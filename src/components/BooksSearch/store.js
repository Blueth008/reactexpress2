import {applyMiddleware, compose, createStore} from 'redux';
import {reducersBooks} from "./reducers";
import {logger, thunk} from "./middleware";

export const storeBooks = createStore(reducersBooks,compose(applyMiddleware(logger,thunk),window.devToolsExtension ? window.devToolsExtension() : f => f));