import React from 'react';
import { Switch, Case, Default } from 'react-statements'

const Text = ({ children }) => {
  return <p>{children}</p>
};

class SwitchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }
  handleChange = (e) => {
    this.setState({selected: e.target.value});
  }
  render() {
    const { selected } = this.state;

    return (
      <div>
      <fieldset>
        <legend>Switch 语句组件</legend>
        <select onChange={this.handleChange} value={selected}>
          <option value="">请选择</option>
          <option value="php">php</option>
          <option value="javascript">javascript</option>
          <option value="c">c</option>
        </select>
        <Switch value={selected}>
          <Case when='javascript'>
            <Text>你选择了最流行的{selected}语言</Text>
          </Case>
          <Case when='php'>
            <Text>你选择了全世界最厉害的{selected}语言</Text>
          </Case>
          <Case when='c' children={<Text>你选择了运行效率最快的{selected}语言</Text>}/>
          <Default children={<Text>请选择一门编程语言</Text>}/>
        </Switch>
      </fieldset>
    </div>
    );
  }
}

export default SwitchExample;
