const { GraphQLServer } = require('graphql-yoga');
import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: './app.graphql',
  resolvers,
});

server.start(() => console.log('Server is running on localhost:4000'));
