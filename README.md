react-redux-creator
=====================
集成了react-router, react-redux, redux, redux-actions, redux-saga, seamless-immutable, connected-react-router, 简化了redux/异步处理和路由集成的配置工作，开箱即用



> 使用redux常常需要创建大量的常量字面量，手动创建actions, 以及相应的reducers进行数据处理，并且redux跟路由配置对新手的的复杂难懂的初始化工作。
>
> <font color="#f30">react-redux-creator</font>简化redux的使用流程，降低集成的难度，对于redux的创建，只提供了一个API即buildRedux完成并集成了异步数据请求。提供了Provider组件直接集成react-router。




* buildRedux提供了创建reducer以及redux-saga的异步处理
* Provider集成了create store以及react-router
* connect方法简化了bindActionsCreator的使用
* 自动合并sagas与reducers
* fetch自定义




## 安装

```terminal
yarn install react-redux-creator
# or
# npm install react-redux-creator
```



## API

[仅4个API](./API.md)




## 使用 

[完整示例](https://github.com/joyerz/react-redux-creator/tree/examples)  
 
### index.jsx(entry)

```javascript
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, config } from 'react-redux-creator'
import fetch from './utils/fetch'
import routes from './routes'

// 初始化react-redux-creator
config({
  fetchMethod: fetch, // 全局定义fetch请求方法
  logger: true, // 是否开启redux-logger
  history: 'browser', // 路由的history
})

（function appRender() {
  const containerElement = document.getElementById('app')
  ReactDOM.render(
    <Provider routes={routes} />, {/* 配置路由 */}
    containerElement,
  )
})()


```




### routes（src/routes/index.jsx）



```javascript
import * as React from 'react'

import { Route, Switch } from 'react-router' 
import Home from '../pages/home'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
export default routes
```





### redux (src/pages/home/redux.js)



```javascript
import { buildRedux } from 'react-redux-creator'
import { obj2params } from '../utils/objectHelper'

export const companyAddRedux = buildRedux('companyAdd')({
  onResult: (data, payload, config) => ({buildRedux})
})

export const companyListRedux = buildRedux('companyList' )({
  url: function*(payload, config){
    const { page, limit } = payload
    const { getState } = config
    let state = yield getState('companyList') // e.g. { name: 1, ... }
    params = obj2params(state.params)

    // 返回请求 '/api/company?page=1&page-size=10&name=1'
    return `/api/company?page=${page}&page-size=${limit}&${params}` 
  }
  onResult: function*(data, payload, config) {
   	return {
      ...data,
      extract: 'extractData'
    }
  	// 对网络请求后的数据进行添加额外extract属性
  },
  onAfter: function* (data, payload, config) {
    const { getActio } = config
		// 发起其他的action
    yield effects.put(getAction('companyAdd').start()) 
  },
  onError: (err) => console.log('Error', err)
})

// 备注：url, data, onResult, onAfetr, onError 都可接受function或者generator function, 如果有异步处理，请使用function* 配合yield使用

```




### container (/src/pages/home/index.jsx)



```javascript
import React from 'react'
import { connect } from 'react-redux-creator'
import { companyAddRedux, companyListRedux } from './redux'

class Home extends React.Component {
  componentDidMount() {
    this.props.actionList()
  }

  render() {
    return <div>Hello</div>
  }
}


export default connect(
  state => {
    return {
      ...state,
    }
  },
  {
    actionList: (page, limit, params) => companyListRedux.start(),
    actionAdd: (params) => companyAddRedux.start(params),
  },
)(Home)
```



