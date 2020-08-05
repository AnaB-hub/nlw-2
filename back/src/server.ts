import express from "express";

import cors from "cors";
import { routes } from "./routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

// app.listen(3333) Faz nosso código ouvir requisições HTTP
server.listen(3333, () => {
  console.log("Server running!");
});
