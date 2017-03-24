import {GraphQLObjectType} from 'graphql';
import user from './models/user/query';

const rootFields = Object.assign({},
user
);

export default new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root query',
  fields: () => rootFields
});
