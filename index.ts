import * as express from "express";
import { v1Routes } from "./src/routes/routes";

const app = express();
const port = 8000;

async function Boot() {
  app.use(express.json());
  
  app.get("/", (_, res) => {
    res.send({ response: "ok", code: 200 })
  })

  v1Routes(app);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
}

Boot();
