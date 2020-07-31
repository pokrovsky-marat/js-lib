/**
 * Implementation of typeof operator.
 * @param {any} input Input an object,that data type  we want to know
 * @returns {string} The data type name like 'number' or 'string'
 */
function getDataType(input) {
  return {}.toString.apply(input).slice(8, -1).toLowerCase();
}
