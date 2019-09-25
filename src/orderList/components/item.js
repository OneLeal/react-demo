import React from 'react'
import { Modal, message, Input } from 'antd'
import '../style/item.less'
export default class OrderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false, flag: true };
    }

    render () {
    const { name, info, price, flag } = this.props.msg
    return (
      <div className={'orderItem__wrap'}>
        <div className={'orderItem__picContainer'}>
          <img className={'orderItem__pic'} src="./header.jpg" alt=""/>
        </div>

        <div className={'orderItem__content'}>
          <div className={'orderItem__name'}>{name}</div>
          <div className={'orderItem__info'}>{info}</div>
          <div className={'orderItem__details'}>
            <div className={'orderItem__price'}>{price}</div>
            <div className={ flag ? 'orderItem__btn' : 'orderItem__btn hasCommented' }>
              { flag ? (<button onClick={this.handleClick}>评 价</button>) : (<button>已评价</button>) }
            </div>
          </div>
        </div>

          <Modal
              title="请输入您的评论"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >
              <Input />
          </Modal>
      </div>)
  }

    handleClick = e => {
      this.setState({
          visible: true,
      });
  }

    handleOk = e => {
        message.info('提交成功')
        this.setState({
            visible: false,
        });
        this.props.msg.flag = false
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
}
