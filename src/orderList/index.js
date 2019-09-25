import React from 'react'
import './style/index.less'
import Item from './components/item'
import axios from 'axios'
import { message } from 'antd'
export default class OrderList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { list: [] }
  }

  componentDidMount () {
    axios.get('./json/listDuck').then((res) => {
      const { code, data, msg } = res.data
      if (code === 200) {
        message.success(msg)
        this.setState(() => ({
          list: data
        }))
      } else {
        message.error('请求失败')
      }
    })
  }

  render () {
    return (
      <div className='orderList__wrap'>
        <div className="__title">评 价</div>
        <div>
          {
            this.state.list.map(item => (<Item key={item.id} msg={ item } />))
          }
        </div>
      </div>
    )
  }
}
