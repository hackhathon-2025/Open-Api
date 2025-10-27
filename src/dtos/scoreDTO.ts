/**
 * Structure interne pour les scores partiels d'un match 'Live'.
 * Correspond à la colonne 'live_score' (JSONB).
 */
export interface LiveScoreJSON {
  set: number;
  game: number;
  point: string; // Ex: '40-15'
}

/**
 * Structure interne pour les scores finaux par set.
 * Correspond à la colonne 'score_sets' (JSONB).
 */
export interface ScoreSetsJSON {
  p1: number[]; // Scores des sets pour le joueur 1 (ex: [6, 7, 6])
  p2: number[]; // Scores des sets pour le joueur 2 (ex: [4, 6, 2])
}
