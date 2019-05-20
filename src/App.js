import React, { Component } from 'react';
import { StoplightContainer } from './containers/Stoplight-container';
import { ButtonContainer } from './containers/Button-container';
import store from './reducer/Store';

 class App extends Component {
  render() {
    return(
      <div>
        <StoplightContainer store={store}/>
        <ButtonContainer store={store}/>
      </div>
    )
  }
}
export default App;