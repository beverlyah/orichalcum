import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import HeaderContainer from '../src/containers/HeaderContainer.jsx';
import store from './store/store.js';

class Orichalcum extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Orichalcum />
  </Provider>,
  document.getElementById('orichalcum'))