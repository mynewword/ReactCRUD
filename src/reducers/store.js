import Redux from 'redux'

// 引入createStore创建store
import {createStore} from 'redux'

import commentsReducer from './comment.js'


export default  createStore(
    commentsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);