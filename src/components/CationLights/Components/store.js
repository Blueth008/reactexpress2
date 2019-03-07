import {createStore} from 'redux';
import Changes from './reducers';

export const lightStore =createStore(Changes);