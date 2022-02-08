import {createStore} from 'redux';

const initialState = {
  counter: 0
}

const reducer = (state=initialState, action) => {
  if(action.type === 'increase') {
    return {counter: state.counter + (action.payload ?? 1)};

  }else if(action.type === 'decrease') {
    return {counter: state.counter - (action.payload ?? 1)};
  }

  return state;
}

const store = createStore(reducer);

export default store;