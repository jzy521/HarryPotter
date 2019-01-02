// file: `src/js/reducers/foo-reducer.js`
// our top-level state key is `foo`
const defaultState = {
  id: 0,
  text: 'some string'
};

/**
 * `state` here is a sub-set
 * explicitly: `state.foo`
 * @param {Object} fooState
 * @param {Action} action
 * @return {Object}
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    // this action increments 'someIndex'
    case 'ADD_TODO':
      state.id++;
      let result = {};
      Object.assign(result, state, {id: state.id++, text: action.text});
      console.log('state: 222 '+ JSON.stringify(result));
      return result;

    default:
      return state;
  }
}
