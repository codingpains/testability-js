'use strict';

module.exports = function(required, args) {
  args = args || {};
  const fields = Object.keys(args).sort().join().toLowerCase();
  return required.sort().join().toLowerCase() === fields;
};
