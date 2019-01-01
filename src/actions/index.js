/**
 * @return {ActionObject}
 */
export function stubAction() {
  return {
    type: 'STUB_ACTION'
  };
}

/**
 * @param {String} code
 * @return {ActionObject}
 */
export function stubPureAction(code) {
  return {
    type: 'STUB_CODE',
    code
  };
}

export default stubAction;
