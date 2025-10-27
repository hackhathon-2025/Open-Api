import { supabase } from "../config/supabaseClient";
import { ResultDTO } from "../dtos/resultDTO";

export async function getResults(matchId?: number): Promise<ResultDTO[]> {
  let query = supabase.from("results").select("*");

  if (matchId) {
    query = query.eq("match_id", matchId);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Supabase fetch error: " + error.message);
  }
  return data as ResultDTO[];
}
