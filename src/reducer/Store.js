import { createStore } from 'redux';

const reducer = (state = 'GO', action) => {
  switch(action.type) {
     case 'GO':
        state = 'GO';
        break;

     case 'STOP':
        state = 'STOP';
        break;

     case 'CAUTION':
        state = 'CAUTION';
        break;

      default:
        return state;
  }
  return state;
}

export default createStore(reducer);
