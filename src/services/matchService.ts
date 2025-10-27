import { supabase } from "../config/supabaseClient";
import { MatchDTO } from "../dtos/matchDTO";

export async function getMatches(): Promise<MatchDTO[]> {
  const { data, error } = await supabase.from("matches").select("*");

  if (error) {
    throw new Error("Supabase fetch error: " + error.message);
  }
  return data as MatchDTO[];
}
