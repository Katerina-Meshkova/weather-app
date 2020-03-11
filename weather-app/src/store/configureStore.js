import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import ReduxThunk from 'redux-thunk';

const createStorewithMiddleware = applyMiddleware(ReduxThunk)(createStore);
export const store = createStorewithMiddleware(rootReducer);
