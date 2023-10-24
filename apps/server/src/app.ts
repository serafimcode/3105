import express, { Application } from "express";

export class App {
  private app: Application;
  constructor(
    private port: number,
    routes: Array<express.Router>,
    middlewares: Array<any>,
    apiUrl: string
  ) {
    this.app = express();
    this.port = port;
    this.setMiddlewares(middlewares)
    this.setRoutes(routes, apiUrl);
  }
  private setMiddlewares(mWare: any[]) {
    mWare.forEach(m => this.app.use(m));
  }

  private setRoutes(routes: Array<express.Router>, apiUrl: string): void {
    routes.forEach(route => this.app.use(apiUrl, route));
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log("App running on port:", this.port);
    })
  }
}
