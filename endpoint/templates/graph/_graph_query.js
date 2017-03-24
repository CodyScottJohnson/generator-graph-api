import {
  <%= endpointName %>
} from './schema';
import db from '../../../sql/index';

export default {
  <%= endpointName %>: {
    type: <%= endpointName %>,
    description: '',
    args: {
          id: {
            type: GraphQLInt
          }
        },
    async resolve(root, args, ctx) {
      return ctx.state.user;
    }
  },
