/**
 * Interface représentant les données d'un match.
 * Correspond à la table 'matches'.
 */
export interface MatchDTO {
  id: number;
  competition_id: number;
  // Note: Pour une requête simplifiée, on peut renvoyer directement les IDs.
  // Pour une API conviviale, il faudrait les objets PlayerDTO liés.
  player1_id: number;
  player2_id: number;

  start_time: string; // Format TIMESTAMP
  round: string; // Ex: '1er Tour', 'Demi-Finale'
  status: "Upcoming" | "Live" | "Finished" | "Cancelled";
}
