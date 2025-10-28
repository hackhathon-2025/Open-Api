import { supabase } from "../config/supabaseClient";
import { MatchDTO } from "../dtos/matchDTO";

export async function getMatches(matchId?: number, status?: string, competitionId?: number): Promise<MatchDTO[]> {
  // Inclure les informations des joueurs via JOIN
  let query = supabase
    .from("matches")
    .select(`
      *,
      player1:players!player1_id(id, name, country, ranking),
      player2:players!player2_id(id, name, country, ranking)
    `);

  if (matchId) {
    query = query.eq("id", matchId);
  }

  if (status) {
    query = query.eq("status", status);
  }

  if (competitionId) {
    query = query.eq("competition_id", competitionId);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Supabase fetch error: " + error.message);
  }
  return data as MatchDTO[];
}
