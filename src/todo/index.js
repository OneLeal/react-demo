import React from 'react'
import './style/index.less'
import { Input, Icon, Button } from 'antd'
import Item from './components/item'
export default class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { list: [], string: '' }
  }

  render () {
    const { Search } = Input;
    const button = <Button icon={'plus'} type={'primary'} >添 加</Button>
    const max = this.state.list.length
    return (
      <div className={'todo-wrap'}>
          <h1 className={'title'}>待办事项</h1>
        <Search
          placeholder=" 写些什么好呢？"
          enterButton={button}
          allowClear
          value={this.state.string}
          prefix={<Icon type="edit" />}
          onSearch={value => this.handleAdd(value)}
          onChange={e => this.handleChange(e)}
        />

        <div className={this.state.list.length ? 'ul' : ''}>
            {
                this.state.list.map((item,index) => {
                    return (
                        <Item del={this.handleDelete} key={index} msg={{ctx: item, index, max}} />
                    )
                })
            }
        </div>
      </div>)
  }

  handleAdd = value => {
      if (!value) {
          return 0;
      }

      this.setState((state) => ({
          list: state.list.length === 0 ? [value] : [...state.list, value],
          string: ''
      }))
  };

    handleChange = (e) => {
        const string = e.target.value
        this.setState(() => ({string}))
    };

    handleDelete = (i) => {
        const arr = this.state.list.filter((item, index) => index !== i);
        this.setState(()=> ({
            list: arr
        }))
    }
}

