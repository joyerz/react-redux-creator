import React from 'react'
import { connect } from 'react-redux-creator'
import { storyAddRedux, storyListRedux } from './redux'

class Home extends React.Component {
  componentDidMount() {
    this.props.actionList({ page: 1, type: '1' })
  }

  render() {
    const { data, loading } = this.props.storyList
    return loading
      ? <div>Loading...</div>
      : (
        <>
          <div style={{
            padding: '20px',
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: '42px',
            background: '#3c0',
            color: '#fff',
          }}>
            最新段子
          </div>
          <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            {data && Object.prototype.toString.call(data) === '[object Array]' && data.map((item, idx) => (
              <li
                key={item.soureid}
                style={{
                  listStyle: 'none',
                  margin: '0',
                  padding: '20px',
                  borderBottom: '1px solid #ddd',
                  display: 'block',
                  background: idx % 2 === 0 ? '#f9f9f9' : '',
                }}
              >
                {item.gif &&
                <div style={{ paddingBottom: '8px' }}>
                  <img
                    src={item.gif}
                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                  />
                </div>
                }

                <div style={{ fontSize: '14px' }}> {item.text}</div>

                <div style={{ paddingTop: '8px', color: '#999' }}>
                  用户: {item.username} &nbsp; &nbsp;
                  评论: {item.comment}
                </div>
              </li>
            ))}
          </ul>
        </>
      )
  }
}

export default connect(
  state => ({
    storyList: state.storyList,
  }),
  {
    actionList: (page, limit, params) => storyListRedux.start(page, limit, params),
  },
)(Home)
