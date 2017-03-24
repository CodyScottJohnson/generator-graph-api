# <%=apiName%>
[Node.js API Starter Kit][nodejskit] is a boilerplate and tooling for authoring **data API**
backends with [Node.js][node], [JavaScript][js] (via [Babel][babel]) and [GraphQL][gql]. It's
meant to be paired with a web and/or mobile application project such as [React Starter Kit][rsk].
## Getting started
#### Required Programs
  * [Docker][docker]
  * [Node][node]

#### Then:
  +
##### 1. cd into the API directory and run
  ```bash
  npm install
  ```
##### 2. copy example environment variables
```bash
cp .env.example .env
```
##### 3. run docker container
```bash
docker-compose up
```
Your server should now be up and running and listening at http:localhost:5000

## GraphQL
Your main graphql endpoint is http:localhost:5000/graphql and graphiql can be accessed via http:localhost:5000/graphiql. The graphql endpoint requires basic authentication and a test user is created as:
* test:test
#### :bulb: Actively maintained with support from <a href="https://rollbar.com/?utm_source=reactstartkit(github)&utm_medium=link&utm_campaign=reactstartkit(github)"><img src="https://koistya.github.io/files/rollbar-247x48.png" height="24" align="top" /></a> <a href="https://localizejs.com/?cid=802&utm_source=rsk"><img src="https://koistya.github.io/files/localize-221x48.png" height="24" align="top" /></a>




## Directory Layout

```bash
.
├── /build/                     # The compiled output (via Babel)
├── /API/                       # This is the current KOA server for the API
├── /migrations/                # Database schema migrations
├── /scripts/                   # Build automation scripts
├── /src/                       # Node.js application source files
│   ├── /models/                # Data access models, e.g. User.create({ email })
│   ├── /routes/                # Express routes, e.g. /login/facebook
│   ├── /types/                 # GraphQL types with resolve functions
│   │   ├── /Node.js            # Relay's "node" definitions
│   │   ├── /UserType.js        # User account (id, email, etc.)
│   │   ├── /ViewerType.js      # The top-level GraphQL object type
│   │   └── /...                # etc.
│   ├── /app.js                 # Express.js application
│   ├── /db.js                  # Database access and connection pooling (via Knex)
│   ├── /passport.js            # Passport.js authentication strategies
│   ├── /redis.js               # Redis client
│   ├── /schema.js              # GraphQL schema
│   └── /server.js              # Node.js server (entry point)
├── /test/                      # Unit, integration and load tests
├── .env                        # Application settings for the dev environment
├── .env.example                # Available application settings as a reference
├── docker-compose.yml          # Defines Docker services, networks and volumes
├── Dockerfile                  # Commands for building a Docker image for production
├── Dockerfile.dev              # Commands for building a Docker image for development
├── package.json                # The list of project dependencies
└── yarn.lock                   # Fixed versions of all the dependencies
```



```bash
docker-compose exec api /bin/sh
```

From this shell you can run automation scripts such as `yarn test`, `yarn run db:migrate` etc.
Find the full list of scripts available inside the [`scripts`](./scripts) folder and
the [`package.json`](./package.json) file.


## Testing

```bash
yarn run lint                   # Find problematic patterns in code
yarn run check                  # Check source code for type errors
yarn run test                   # Run unit tests once
yarn run test:watch             # Run unit tests in watch mode
```




[nodejskit]: https://github.com/kriasoft/nodejs-api-starter
[rsk]: https://github.com/kriasoft/react-starter-kit
[node]: https://nodejs.org
[js]: https://developer.mozilla.org/docs/Web/JavaScript
[babel]: http://babeljs.io/
[gql]: http://graphql.org/
[yarn]: https://yarnpkg.com
[demo]: https://reactstarter.com/graphql
[pg]: https://www.postgresql.org/
[do]: https://m.do.co/c/eef302dbae9f
[code]: https://code.visualstudio.com/
[wstorm]: https://www.jetbrains.com/webstorm/
[docker]: https://www.docker.com/products/docker
[compose]: https://docs.docker.com/compose/
[v8debug]: https://chromedevtools.github.io/debugger-protocol-viewer/v8/
[vsdebug]: https://code.visualstudio.com/Docs/editor/debugging
[passport]: http://passportjs.org/
[redis]: https://redis.io/
[loader]: https://github.com/facebook/dataloader
[gitter]: https://gitter.im/kriasoft/nodejs-api-starter
[skype]: https://hatscripts.com/addskype?koistya
