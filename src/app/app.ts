import express, { Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

app.get("/:userId", (req: Request, res: Response) => {
  res.send("Hello World!");
  console.log(req.params);
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json("Got data");
});

export default app;
