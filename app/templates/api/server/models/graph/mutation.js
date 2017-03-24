import {
  GraphQLObjectType
} from 'graphql';
import user from './models/user/mutation';

const rootFields = Object.assign({},
  user
);

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is the root query',
  fields: () => rootFields
});
