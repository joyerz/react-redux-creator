API
=========================

- <a href="#config">config</a>
- <a href="#provider">Provider</a>
- <a href="#connect">connect</a>
- <a href="#buildRedux">buildRedux</a>


## <a name="config"></a>config(options)

初始化方法

| options     | type                                                         | description                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| fetchMethod | (config) => Promise<any><br />config: {<br />    url: string, <br />    method: string, // optional, default "GET"<br />    data: object,  // optional <br />    headers: object, // optional<br />} | 全局fetch方法, <br />通常应用的请求有公共的处理方式，<br />比如针对400等错误的处理，此处定义通用的网络请求fetch方法 |
| logger      | boolean                                                      | 默认"true", 是否开启redux-logger                             |
| history     | 'browser', 'hash', 'memory'                                  | 路由方式，详细见[history](https://github.com/ReactTraining/history) |
| autoActions | boolean                                                      | 默认"true", 自动执行success, reset方法                       |


***example***

```javascript
import { config } from 'react-redux-creator'
import fetch from './utils/fetch'

config({
  fetchMethod: fetch, // 全局配置fetch
  history: 'browser', // 默认
  logger: true, // 开启redux-logger
  autoActions: true, // 是否开启saga自动success和错误的reset
})
```



## <a name="provider"></a>Provider 组件

集成路由

| props     | type                                     | description    |
| --------- | ---------------------------------------- | ----------- |
| routes    | React.Component \| () => React.Component | 路由配置    |
| initState | object(optional)                         | 初始化state |


***example***

```javascript
ReactDOM.render(
  <Provider routes={routes} />, {/* 配置路由 */}
  document.getElementById('app'),
)
```


## <a name="connect"></a>connect(mapStateToProps, mapActionsToProps)(component)

简化了mapActionsToProps, 自动合并了bindActionCreators的处理

| arguments          | types             | description                  |
| ----------------- | ----------------- | ---------------------------- |
| mapStateToProps   | (state) => object | 同react-redux方法            |
| mapActionsToProps | object            | 自动合并了bindActionCreators |
| component         | React.Component   | 同react-redux方法            |



## <a name="buildRedux"></a>buildRedux(actionName, initState)(config)

| arguments  | child    | type                                                   | required | description                                                  |
| ---------- | -------- | ------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| actionName | -        | string                                                 | Y        | redux的action字面量以及存储在state的数据key                  |
| initState  |          | object                                                 | N        | 初始化数据, 默认(挂载到state中)包括<br />{<br />    loading: false,<br />    error: false,<br />    success: false,<br />    params: null,<br />    data: null,<br />} |
| config     |          |                                                        |          | saga异步请求                                                 |
|            | url      | string \| function*(payload, callbackConfig) => string | N        | <font color=#f30>callbackConfig</font> 见下表                |
|            | method   | string                                                 | N        | POST, GET, PUT, DELETE...                                    |
|            | data     | object \| function*(payload, callbackConfig) => object | N        | GET自动转为url search,<br />其他方式则为放body的数据         |
|            | headers  |                                                        | N        |                                                              |
|            | onResult | function*(data, payload, callbackConfig) => object     | N        | 当fetch请求完(如果有url，<br />fetch后，否则直接到该方法)，<br />数据处理后返回给saga，<br /><b>自动调用redux success方法</b>，<br />回传到reducer 并最终合并到<br />state下。如果方法没有数据，<br />则默认使用原始的data。 <br /><a name="callbackConfig">callbackConfig</a> 见下表 |
|            | onAfter  | function*(data, payload, callbackConfig) => object     | N        | onResult完成以后执行，<br />在这里可以继续执行其他<br />的异步方法或者发起其他action,<br /><a name="callbackConfig">callbackConfig</a> 见下表 |
|            | onError  | function*(err, payload, callbackConfig) => any         | N        | 错误异常处理，<br /><b>自动调用redux的reset方法</b><br />也可以在这里手动执行error方法<br /><a name="callbackConfig">callbackConfig</a> 见下表 |

**url**, **data**, **onResult**, **onAfter**, **onError** 都可接受function或者generator function, 如果有异步处理，请使用function* 配合yield使用

### callbackConfig

| param     | type                   | description                                            |
| --------- | ---------------------- | ------------------------------------------------------ |
| put       | function               | redux-saga的effect, 发起dispatch                       |
| call      | function               | redux-saga的effect, 发起异步处理                       |
| getAction | (actionName) => Action | 通过actionName获取action(start, success, error, reset) |
| getState  | (actionName) => State  | 通过actionName获取state节点数据                        |

