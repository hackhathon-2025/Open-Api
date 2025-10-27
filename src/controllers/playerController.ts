import { Request, Response } from "express";
import { getPlayers } from "../services/playerService";

export const fetchPlayers = async (req: Request, res: Response) => {
  try {
    const playerId = req.query.playerId ? parseInt(req.query.playerId as string) : undefined;
    const players = await getPlayers(playerId);
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
};
