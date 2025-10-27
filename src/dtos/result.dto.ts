import { LiveScoreJSON, ScoreSetsJSON } from "./score.dto";

/**
 * Interface représentant les données des résultats d'un match.
 * Correspond à la table 'results'.
 */
export interface ResultDTO {
  match_id: number;
  winner_id: number | null; // Null si le match est 'Live'

  // Les scores peuvent être null si le match est 'Upcoming' ou s'il est 'Live' (le score est dans live_score)
  score_sets: ScoreSetsJSON | null;
  live_score: LiveScoreJSON | null;

  duration: number | null; // Durée en minutes
  updated_at: string; // Horodatage de la dernière mise à jour (crucial pour le 'temps réel')
}
