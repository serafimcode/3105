import {BaseModel} from "../interfaces/BaseModel";
import { Response} from "express";

export abstract class BaseController<T> {
  protected constructor(protected model: BaseModel<T>) {
    this.model = model;
  }

  protected ok<T> (res: Response, data?: T) {
    if (data) {
      res.type('application/json');
      res.status(200).json(data);
    } else {
      res.sendStatus(200);
    }
  }
}
