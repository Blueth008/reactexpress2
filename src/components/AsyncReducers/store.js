import {logger, thunk} from "./middleware";
import {applyMiddleware, compose, createStore} from 'redux';
import {ReducersAsnyc} from "./reducers";

export const storeAsync = createStore(ReducersAsnyc,compose(applyMiddleware(logger,thunk),window.devToolsExtension ? window.devToolsExtension() : f => f));

