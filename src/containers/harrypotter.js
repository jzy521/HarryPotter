import { connect } from 'react-redux';
import Harrypotter from '../components/harrypotter';
import { addTodo } from '../actions';
/**
 * boilerplate to enable redux
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  add: text => {
    console.log('add action !!! '+ text);
    dispatch(addTodo(text));
  }
});

/**
 * boilerplate to enable redux
 * @param {Object} state
 * @param {Object} props
 * @return {Object}
 */
const mapStateToProps = (state, props) => {
  console.log('mapStateToProps '+ JSON.stringify(props));
  return ({
  id: state.fooReducer.id,
  text: state.fooReducer.text
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Harrypotter);
