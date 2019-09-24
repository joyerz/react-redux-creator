# react-redux-creator
集成了react-router, react-redux, redux, redux-actions, redux-saga, seamless-immutable, connected-react-router, 简化了redux/异步处理和路由集成的配置工作，开箱即用



> 使用redux常常需要创建大量的常量字面量，手动创建actions, 以及相应的reducers进行数据处理，并且redux跟路由配置对新手的的复杂难懂的初始化工作。
>
> <font color="#f30">react-redux-creator</font>简化redux的使用流程，降低集成的难度，对于redux的创建，只提供了一个API即buildRedux完成并集成了异步数据请求。提供了Provider组件直接集成react-router。




* buildRedux提供了创建reducer以及redux-saga的异步处理
* Provider集成了create store以及react-router
* connect方法简化了bindActionsCreator的使用
* 自动合并sagas与reducers
* fetch自定义




### 安装

```terminal
yarn install react-redux-creator
# or
# npm install react-redux-creator
```



### API

<b>config</b>(options) 
初始化方法

| options     | type                                                         | description                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| fetchMethod | (config) => Promise<any><br />config: {<br />    url: string, <br />    method: string, // optional, default "GET"<br />    data: object,  // optional <br />    headers: object, // optional<br />} | 全局fetch方法, <br />通常应用的请求有公共的处理方式，<br />比如针对400等错误的处理，此处定义通用的网络请求fetch方法 |
| logger      | boolean                                                      | 默认"true", 是否开启redux-logger                             |
| history     | 'browser', 'hash', 'memory'                                  | 路由方式，详细见[history](https://github.com/ReactTraining/history) |
| autoActions | boolean                                                      | 默认"true", 自动执行success, reset方法                       |

<i>example:</i>

```javascript
import { config } from 'react-redux-creator'
import fetch from './utils/fetch'

config({
	fetchMethod: fetch,
  history: 'browser', // 默认
  logger: true, // 开启redux-logger
})
```





<b>
Provider 组件</b>
集成路由

| props     | type                                     | descript    |
| --------- | ---------------------------------------- | ----------- |
| routes    | React.Component \| () => React.Component | 路由配置    |
| initState | object(optional)                         | 初始化state |

<i>example:</i>

```javascript
function appRender() {
  const containerElement = document.getElementById('app')
  ReactDOM.render(
    <Provider routes={routes} />, {/* 配置路由 */}
    containerElement,
  )
}
```







<b>buildRedux(actionName, initState)(config)</b> 
创建redux, 合并reducer以及saga

| arguments  | child    | type                                                   | required | description                                                  |
| ---------- | -------- | ------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| actionName | -        | string                                                 | Y        | redux的action字面量以及存储在state的数据key                  |
| initState  |          | object                                                 | N        | 初始化数据, 默认(挂载到state中)包括<br />{<br />    loading: false,<br />    error: false,<br />    success: false,<br />    params: null,<br />    data: null,<br />} |
| config     |          |                                                        |          | saga异步请求                                                 |
|            | url      | string \| function*(payload, callbackConfig) => string | N        | <font color=#f30>callbackConfig</font> 见下表                |
|            | method   | string                                                 | N        | POST, GET, PUT, DELETE...                                    |
|            | data     | object \| function*(payload, callbackConfig) => object | N        | GET自动转为url search,<br />其他方式则为放body的数据         |
|            | headers  |                                                        | N        |                                                              |
|            | onResult | function*(data, payload, callbackConfig) => object     | N        | 当fetch请求完(如果有url，自动fetch后，否则直接到该方法)，数据处理后返回给saga，<b>自动调用redux success方法</b>，回传到reducer 并最终合并到state下。如果方法没有数据，则默认使用原始的data, <br /><font color=blue>callbackConfig</font> 见下表 |
|            | onAfter  | function*(data, payload, callbackConfig) => object     | N        | onResult完成以后执行，在这里可以继续执行其他的异步方法或者发起其他action,<br /><font color=blue>callbackConfig</font> 见下表 |
|            | onError  | function*(err, payload, callbackConfig) => any         | N        | 错误异常处理，<br /><b>自动调用redux的reset方法</b><br />也可以在这里手动执行error方法<br /><font color=blue>callbackConfig</font> 见下表 |







### 使用

**index.jsx（entry）**

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

