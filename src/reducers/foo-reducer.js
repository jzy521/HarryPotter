// file: `src/js/reducers/foo-reducer.js`
// our top-level state key is `foo`
const defaultFoo = {
  someIndex: 0,
  bar: 'some string',
  baz: {
    key1: 'another string',
    key2: ['an', 'array', 'of', 'strings'],
    key3: {
      another: 'key'
    }
  }
};

/**
 * `state` here is a sub-set
 * explicitly: `state.foo`
 * @param {Object} fooState
 * @param {Action} action
 * @return {Object}
 */
export default function(fooState = defaultFoo, action) {
  switch (action.type) {
    // this action increments 'someIndex'
    case 'FOO_ACTION_1':
      fooState.someIndex++;

      return {
        ...fooState
      };

    default:
      return fooState;
  }
}
