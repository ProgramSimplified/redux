/**
 * @file saga 内部主要用来处理副作用(side effects)。这里指程序对外部的操作，比如请求后端，比如操作文件
 * @author Angus Yang
 * @date 2020/3/7
 * @description UI——>action(side function)—>middleware—>action(plain)—>reducer—>state—>UI
 */
import { put, takeEvery, all, delay } from 'redux-saga/effects';
import json from '../../api/articles'

function* search(action) {
  console.log(action.query);
  yield put({type: 'LOAD_ARTICLES'});
  yield delay(1000);
  yield new Promise(resolve => resolve(json));
  // yield json
  yield put({type: 'LOAD_ARTICLES_SUCCESS', payload: json})
}

function* watchSearchAsync() {
  yield takeEvery('SEARCH_ASYNC', search)
}

export default function* () {
  yield all([
    watchSearchAsync()
  ])
}
