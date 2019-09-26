import React from 'react'
import './App.css'
import Order from './orderList'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import Todo from './todo'
function App () {
  return (
    <ConfigProvider locale={zhCN}>
      {/* <Order /> */}
      <div className={'todo-list-wrapper'}>
        <Todo />
      </div>
    </ConfigProvider>
  )
}

export default App
