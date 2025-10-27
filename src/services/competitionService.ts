import { supabase } from "../config/supabaseClient";
import { CompetitionDTO } from "../dtos/competitionDTO";

export async function getCompetitions(): Promise<CompetitionDTO[]> {
  const { data, error } = await supabase.from("competitions").select("*").order("start_date", { ascending: true });

  if (error) {
    throw new Error("Supabase fetch error: " + error.message);
  }
  return data as CompetitionDTO[];
}
