import React from 'react'
import { companyListRedux } from './redux'
import * as d from '../../src/index'

class App extends React.Component {
  componentDidMount() {
    this.props.actionList()
  }

  render() {
    return <div>Hello</div>
  }
}


export default d.default.connect(
  state => {
    return {
      ...state,
    }
  },
  {
    actionList: (page, limit, params) => companyListRedux.actions.start(),
  },
)(App)
