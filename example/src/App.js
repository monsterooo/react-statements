import React from 'react';
import IfExample from './IfExample';
import SiwtchExample from './SwitchExample';
import ForExample from './ForExample';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <IfExample />
        <SiwtchExample />
        <ForExample />
      </div>
    )
  }
}

export default App;
