import express, { NextFunction, Request, Response } from "express";
const app = express();

const userRouter = express.Router();
const courseRouter = express.Router();

// parsers
app.use(express.json());
app.use(express.text());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Course created successfully",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(something);
    console.log(req.query);
  } catch (err) {
    next(err);
  }
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json("Got data");
});

// global error handler
app.use("*", (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default app;
