import React from 'react'
import { companyAddRedux, companyListRedux } from './redux'
import * as d from '../../src/index'

class App extends React.Component {
  componentDidMount() {
    this.props.actionList()
    // this.props.actionAdd({ type: 'company'})
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
    actionList: (page, limit, params) => companyListRedux.start(),
    actionAdd: (params) => companyAddRedux.start(params),
  },
)(App)
