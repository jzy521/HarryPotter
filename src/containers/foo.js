import { connect } from 'react-redux';
import Harrypotter from '../components/harrypotter';

/**
 * boilerplate to enable redux
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  fooTriggerUpdateState: text => {
    dispatch({
      type: 'FOO_UPDATE',
      text
    });
  }
});

/**
 * boilerplate to enable redux
 * @param {Object} state
 * @param {Object} props
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
  ...props,
  foo: state.foo,
  bar: state.bar
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Harrypotter);
