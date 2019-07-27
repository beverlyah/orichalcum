import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Overview from './overview/index.jsx'
import RelatedItems from './related/index.jsx'

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
        <Overview info={this.state}/>
        <RelatedItems />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Orichalcum />, document.getElementById('orichalcum'))