'use strict';

const toPlainObject = require('lodash/toPlainObject');

class MemoryDatabase {
  constructor() {
    this.store = [];
  }

  findUserByUsername(username, callback) {
    let result = this.store.find((user) => user.username === username);
    setTimeout(() => callback(null, result));
  }

  createUser(user, callback) {
    this.store.push(toPlainObject(user));
    setTimeout(() => callback(null, user));
  }
}

module.exports = MemoryDatabase;
