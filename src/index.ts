import express, { Express, Request, Response } from "express";
import { supabase } from "./config/supabaseClient";

const app: Express = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("competitions").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
