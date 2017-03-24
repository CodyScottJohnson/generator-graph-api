import Controller from '../controller/graph-controller';
import {
  graphqlKoa,
  graphiqlKoa
} from 'graphql-server-koa';
import graphSchema from '../model/index.js';

export default class oauthRoutes {
  static init(router, authController) {
    let graph = new Controller();
    router.post('/graphql', authController.isAuthenticated, graphqlKoa((ctx) => {
      return {
        schema: graphSchema,
        context: ctx
      }
    }));
    router.get('/graphql', authController.isAuthenticated, graphqlKoa((ctx) => {
      return {
        schema: graphSchema,
        context: ctx
      }
    }));
    router.get('/graphiql', graphiqlKoa({
      endpointURL: '/graphql'
    }));
  }
}
