import { all } from 'redux-saga/effects'
import homeSaga from '../views/HomeSaga';
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    homeSaga(),
  ])
}
