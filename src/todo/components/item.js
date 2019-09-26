import React from 'react'
import { Button, Modal } from 'antd'
import '../style/item.less'
const { confirm } = Modal;
export default class Item extends React.Component {
  render () {
    const { index, ctx, max } = this.props.msg
    const line = { borderBottom: '1px #333 dashed' }
    return (
      <div style={ index + 1 === max ? {} : line } className={'list-item-wrap'}>
        <p>{index + 1}. {ctx}</p>
        <Button onClick={() => this.showConfirm(ctx)} size={'small'} icon={'delete'} type={'danger'}>删 除</Button>
      </div>
    )
  }

    handleDelete = () => {
      const { index } = this.props.msg
      this.props.del(index)
    }

    showConfirm = (ctx) => {
        const fn = this.handleDelete
        confirm({
            title: '确定删除 ?',
            content: ctx,
            okText: '是的！',
            okType: 'danger',
            cancelText: '我再想想',
            onOk() {
                fn();
            },
        });
    }
}
