import { Request, Response } from "express";
import { getMatches } from "../services/matchService";

export const fetchMatches = async (req: Request, res: Response) => {
  try {
    const matches = await getMatches();
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch matches" });
  }
};
