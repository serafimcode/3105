import {Request, Response} from "express";
import {BaseController} from "./BaseController";
import {User} from "../models/user";
import {UsersModel} from "../models/users.model";

export class UsersController extends BaseController<User>{
  constructor() {
    super(new UsersModel());
  }
  async getAll(req: Request, res: Response): Promise<void> {
    const users = await this.model.getAll();
    this.ok(res, users);
  }
}

export default UsersController;
