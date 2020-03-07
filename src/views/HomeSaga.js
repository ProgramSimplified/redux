import tableSaga from '../components/Home/TableSaga';
import { all } from 'redux-saga/effects'


export default function* homeSaga() {
  yield all([
    tableSaga()
  ])
}
