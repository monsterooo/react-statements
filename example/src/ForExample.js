import React from 'react';
import { For, Default } from 'react-statements'

const Text = ({ children }) => {
  return <p>{children}</p>
};

class ForExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ['c', 'java', 'php', 'javascript'],
    };
  }
  render() {
    const { language } = this.state;

    return (
      <div>
      <fieldset>
        <legend>For 语句组件</legend>
        <p>循环列表</p>
        <For of={language}>
          {(item, index) => (<Text key={index}>{index}：{item}</Text>)}
          <Default>没有找到编程语言</Default>
        </For>
      </fieldset>
    </div>
    );
  }
}

export default ForExample;
