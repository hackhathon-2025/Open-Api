import { supabase } from "../config/supabaseClient";
import { MatchDTO } from "../dtos/matchDTO";

export async function getMatches(matchId?: number, status?: string): Promise<MatchDTO[]> {
  let query = supabase.from("matches").select("*");

  if (matchId) {
    query = query.eq("id", matchId);
  }

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Supabase fetch error: " + error.message);
  }
  return data as MatchDTO[];
}
