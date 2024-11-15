import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  res.json(req.body);
});

export default app;
