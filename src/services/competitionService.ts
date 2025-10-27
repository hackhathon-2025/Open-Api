import { supabase } from "../config/supabaseClient";
import { CompetitionDTO } from "../dtos/competitionDTO";

export async function getCompetitions(competitionId?: number): Promise<CompetitionDTO[]> {
  let query = supabase.from("competitions").select("*").order("start_date", { ascending: false });

  if (competitionId) {
    query = query.eq("id", competitionId);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Supabase fetch error: " + error.message);
  }
  return data as CompetitionDTO[];
}
