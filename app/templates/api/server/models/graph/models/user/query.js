import {
  User
} from './schema';

export default {
  me: {
    type: User,
    description: '',
    async resolve(root, _, ctx) {
      return ctx.state.user;
    }
  },
