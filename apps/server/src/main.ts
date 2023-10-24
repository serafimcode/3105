import middlewares from "./middleware";
import usersRouter from "./routes/users.router";
import {env} from "./environment/env";
import {App} from "./app";


async function startServer() {
  const environment = await env();
  const port = environment.port || 3333;
  const apiUrl = environment.apiUrl || '/api';

  new App(
    port,
    [usersRouter],
    middlewares,
    apiUrl
  ).listen()
}

startServer();
