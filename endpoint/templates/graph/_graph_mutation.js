import {
    <%= endpointName %>
} from './schema';
import {
  GraphQLInt
} from 'graphql';
import db from '../../../sql/index';

export default {
    create<%= sampleMutation %>: {
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
    }
  }
