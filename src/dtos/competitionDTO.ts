/**
 * Interface représentant les données d'une compétition.
 * Correspond à la table 'competitions'.
 */
export interface CompetitionDTO {
  id: number;
  name: string;
  start_date: string; // Format TIMESTAMP (ex: '2025-01-13T00:00:00.000Z')
  end_date: string; // Format TIMESTAMP
  type: string; // Type de surface (ex: 'Dur', 'Gazon', 'Terre Battue')
  status: "Upcoming" | "Live" | "Completed"; // État de la compétition
}
