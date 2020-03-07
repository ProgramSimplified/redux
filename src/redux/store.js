import {routerMiddleware, routerReducer} from 'react-router-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import hashHistory from '../routes/history';
import reducres from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// redux devtools for chrome browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    // ...reducers,
    ...reducres,
    routing: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      // ...middlewares,
      routerMiddleware(hashHistory),
      sagaMiddleware,
      thunk
    )
  )
);

sagaMiddleware.run(rootSaga)


export default store;
