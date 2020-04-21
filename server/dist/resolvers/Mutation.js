'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fake_data = require('../fake_data');

var Mutation = {
  addMessage: function addMessage(_, _ref) {
    var title = _ref.title,
        body = _ref.body,
        author = _ref.author;

    var newMessage = { title: title, body: body, author: author };
    _fake_data.messages.push(newMessage);
    return newMessage;
  }
};

exports.default = Mutation;