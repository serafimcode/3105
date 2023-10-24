import { join } from "path";
import {readFile} from "node:fs/promises";
import {BaseModel} from "../interfaces/BaseModel";
import {User} from "./user";

export class UsersModel implements BaseModel<User>{
  async getAll(): Promise<User[]> {
    /**TODO: разобраться с dev сервером @nx/js:node */
    const path = join(__dirname, 'data', 'users.json');
    const data = await readFile(path, {encoding: 'utf-8'});
    console.log(data)
    return [{ email: '', number: 123}];
  }
}
