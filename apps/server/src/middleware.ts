import { json, urlencoded } from "express"
import cors from "cors";

const middlewares = [
  // json(),
  // urlencoded(),
  cors({
    origin: "http://localhost:4200"
  }),
]

export default middlewares;
