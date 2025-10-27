import { supabase } from "../config/supabaseClient";
import { PlayerDTO } from "../dtos/playerDTO";

export async function getPlayers(playerId?: number): Promise<PlayerDTO[]> {
  let query = supabase.from("players").select("*");

  if (playerId) {
    query = query.eq("id", playerId);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Supabase fetch error: " + error.message);
  }
  return data as PlayerDTO[];
}
