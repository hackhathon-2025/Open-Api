import { Request, Response } from "express";
import { getMatches } from "../services/matchService";

export const fetchMatches = async (req: Request, res: Response) => {
  try {
    const matchId = req.query.matchId ? parseInt(req.query.matchId as string) : undefined;
    const status = req.query.status as string | undefined;
    const matches = await getMatches(matchId, status);
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch matches" });
  }
};
