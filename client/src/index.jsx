import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import OverviewContainer from '../src/containers/OverviewContainer.jsx';
import ReviewsContainer from './containers/ReviewsContainer.jsx';
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
        <ReviewsContainer/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Orichalcum />
  </Provider>,
  document.getElementById('orichalcum'))