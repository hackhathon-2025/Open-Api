/**
 * Interface représentant les données d'un joueur.
 * Correspond à la table 'players'.
 */
export interface PlayerDTO {
  id: number;
  name: string;
  country: string; // Code pays (ex: 'FRA', 'ESP')
  ranking: number; // Classement ATP/WTA actuel
}
