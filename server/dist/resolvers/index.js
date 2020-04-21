'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Query = require('./Query');

var _Query2 = _interopRequireDefault(_Query);

var _Mutation = require('./Mutation');

var _Mutation2 = _interopRequireDefault(_Mutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: _Query2.default,
  Mutation: _Mutation2.default
};