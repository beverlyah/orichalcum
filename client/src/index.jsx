import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Overview from './overview/index.jsx'
import RelatedItems from './related/index.jsx'
import OverviewContainer from '../src/containers/OverviewContainer.jsx';
import store from './store/store.js';

class Orichalcum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <React.Fragment>
        <OverviewContainer />
        <RelatedItems />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Orichalcum />
  </Provider>,
  document.getElementById('orichalcum'))