import { Request, Response } from "express";
import { getCompetitions } from "../services/competitionService";

export const fetchCompetitions = async (req: Request, res: Response) => {
  try {
    const competitionId = req.query.competitionId ? parseInt(req.query.competitionId as string) : undefined;
    const competitions = await getCompetitions(competitionId);
    res.status(200).json(competitions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch competitions" });
  }
};
