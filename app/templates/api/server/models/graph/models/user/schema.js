import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';
import db from '../../sql/index';

export const User new GraphQLObjectType({
  name: 'User',
  descirption: 'This Represents a Shout User',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        description: "This is the ID for the User",
        resolve(person) {
          return person.id;
        }
      },
      username:{
        type: GraphQLString,
        resolve(person) {
          return person.username;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(person) {
          return person.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(person) {
          return person.lastName;
        }
      }
    }
  }
});
