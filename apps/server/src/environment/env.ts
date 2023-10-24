import {exit} from "process";
import IEnv from "../interfaces/IEnv";
import {DEV} from "./dev";
import {PROD} from "./prod";

export const env: () => Promise<IEnv> = async () => {
  if (process.env.ENVIRONMENT === "dev") {
    return DEV;
  } else if (process.env.ENVIRONMENT === "production") {
    return PROD;
  } else {
    console.log(
      `Error. shell variable ENVIRONMENT not set. Acceptable values are 'dev' | 'production'`
    );
    exit(1);
  }
};
