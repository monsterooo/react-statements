import React from 'react';
import { If } from 'react-statements'

class IfExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      isNum: 1,
      isNumZero: 0,
    };
  }
  handleIf = () => {
    this.setState({isShow: !this.state.isShow});
  }
  render() {
    const { isShow, isNum, isNumZero } = this.state;

    return (
      <div>
      <fieldset>
        <legend>If 语句组件</legend>
        <div>
          <button onClick={this.handleIf}>
            {!isShow ? '显示内容' : '隐藏内容'}
          </button>
          <If when={isShow}>
            <p>↔️我是一些组件内容</p>
          </If>
        </div>
        <div>
          <If when={isNum} children={<p>我也可以通过number类型判断，大于1显示内容</p>} />
          <If when={isNumZero} children={<p>我也可以通过number类型判断, 小于1隐藏内容</p>} />
        </div>
      </fieldset>
    </div>
    );
  }
}

export default IfExample;
