import express, { Express, Request, Response } from "express";
import router from "./routes/public.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swaggerConfig";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the public API!",
    version: "1.0.0",
    endpoints: ["GET /api/competitions"],
    documentation: "/api-docs",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
