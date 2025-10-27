import { Request, Response } from "express";
import { getCompetitions } from "../services/competitionService";

export const fetchCompetitions = async (req: Request, res: Response) => {
  try {
    const competitions = await getCompetitions();
    res.status(200).json(competitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch competitions" });
  }
};
