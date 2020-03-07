/**
 * @file 整合reducer
 * @author Angus Yang
 * @date 2020/2/26
 * @description
 */

import { combineReducers } from 'redux';
import tableReducer from '../components/Home/TableRedux';

// reducers
export default combineReducers({
  table: tableReducer,
})

// action creators
import * as tableActions from '../components/Home/TableRedux'
export {tableActions}
