import express, {Request, Response} from "express";
import UsersController from "../controllers/users.controller";

const usersRouter = express.Router();
const usersController = new UsersController();

const BASE_URL = '/users';

usersRouter.get(BASE_URL,
  (req: Request, res: Response) =>  usersController.getAll(req, res)
);

export default usersRouter;
