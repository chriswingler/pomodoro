import React, { Component } from 'react';
import Label from './components/Label';

class App extends Component {
  render() {
    return (
      <div>
        <Label id="break-label" text="Break Length" />
        <Label id="session-label" text="Session Length" />
      </div>
    )
  }
}

export default App;
