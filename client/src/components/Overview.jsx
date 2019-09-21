import { connect } from 'react-redux'
import React, { Component } from 'react'
import store from '../store/store'

class Overview extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.products('1')
  }


  render() {

    console.log('props in overview: ', this.props);



    return <div>Hello World</div>
  }
}

export default Overview