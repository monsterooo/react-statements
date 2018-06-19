import React, { Component } from 'react'

import {If, Switch, Case, Default, For} from 'react-statements'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  handleChange = () => {
    this.setState({
      num: 1,
    });
  }
  render() {
    const value = 0;
    const { num } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleChange}>设置值</button>
        <If when={value === 0}>
          abcx
          <div>显示内容</div>
        </If>
        <Switch value={value}>
          <Case when={num}>
            <div>case 0</div>
          </Case>
          <Default>
            <div>我是Default组件</div>
          </Default>
        </Switch>
        <For of={['a', 'b']}>
          {(item, index) => {
            return (<div key={index}>循环 {item} - {index}</div>)
          }}
          <Default>
            <div>我是Default组件</div>
          </Default>
        </For>
        <br/>
        <For of={{}}>
          {(value, index, key) => {
            return (<div key={index}>循环对象 {key} - {value} - {index}</div>)
          }}
          <Default>
            <div>我是Default组件 object</div>
          </Default>
        </For>
      </div>
    )
  }
}

export default App;
