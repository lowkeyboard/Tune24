import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './app/redux/sagas';
import rootReducer from './app/redux/reducers/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Run redux-saga
sagaMiddleware.run(rootSaga);

export default store;
