import { Request, Response } from "express";
import { getResults } from "../services/resultService";

export const fetchResults = async (req: Request, res: Response) => {
  try {
    const matchId = req.query.matchId ? parseInt(req.query.matchId as string) : undefined;
    const results = await getResults(matchId);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch results" });
  }
};
