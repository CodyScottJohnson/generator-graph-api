import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';
import db from '../../../sql/index';

const <%= endpointName %> = new GraphQLObjectType({
  name: '<%= endpointName %>',
  description: 'This Represents a <%= endpointName %>',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        description: "This is the ID for the <%= endpointName %>",
        resolve(<%= endpointName %>) {
          return <%= endpointName %>.id;
        }
      }
    }
  }
});
exports.<%= endpointName %> = <%= endpointName %>;
