import React from 'react'
import { connect } from 'react-redux-creator'
import { storyAddRedux, storyListRedux } from './redux'

class Home extends React.Component {
  componentDidMount() {
    this.props.actionList({ page: 1, type: '1' })
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default connect(
  state => state.storyList,
  {
    actionList: (page, limit, params) => storyListRedux.start(page, limit, params)
  }
)(Home)
