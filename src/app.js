import ReactDOM from 'react-dom';
import React from 'react';
import { syncHistoryWithStore, push }  from 'react-router-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './routes/history';
import store from './redux/store';
import routes from './routes';
import 'antd/dist/antd.css';
const browserHistory = syncHistoryWithStore(history, store); // sync func. returns new instance of `history`
browserHistory.listen(location => console.info('-> location:', location));

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('root'));
