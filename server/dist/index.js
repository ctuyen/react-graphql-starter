'use strict';

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('graphql-yoga'),
    GraphQLServer = _require.GraphQLServer;

var server = new GraphQLServer({
  typeDefs: './app.graphql',
  resolvers: _resolvers2.default
});

server.start(function () {
  return console.log('Server is running on localhost:4000');
});