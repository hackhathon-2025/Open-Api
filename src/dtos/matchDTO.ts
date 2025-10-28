/**
 * Interface représentant les données d'un joueur dans un match.
 */
export interface MatchPlayerDTO {
  id: number;
  name: string;
  country: string;
  ranking: number;
}

/**
 * Interface représentant les données d'un match.
 * Correspond à la table 'matches' avec les infos des joueurs.
 */
export interface MatchDTO {
  id: number;
  competition_id: number;
  player1_id: number;
  player2_id: number;
  start_time: string; // Format TIMESTAMP
  round: string; // Ex: '1er Tour', 'Demi-Finale'
  status: string;
  player1?: MatchPlayerDTO; // Infos du joueur 1
  player2?: MatchPlayerDTO; // Infos du joueur 2
}
