import { Router } from "express";
import { fetchCompetitions } from "../controllers/competitionController";
import { fetchMatches } from "../controllers/matchController";
import { fetchResults } from "../controllers/resultController";
import { fetchPlayers } from "../controllers/playerController";

const router: Router = Router();

/**
 * @swagger
 * /api/competitions:
 *   get:
 *     summary: Retrieve a list of competitions
 *     tags:
 *      - Competitions
 *     description: Retrieve a list of competitions from the database. Can be filtered by competition ID.
 *     parameters:
 *       - in: query
 *         name: competitionId
 *         schema:
 *           type: integer
 *         description: Optional ID of the competition to retrieve.
 *     responses:
 *       200:
 *         description: A list of competitions.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Competition'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: Competition not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/competitions", fetchCompetitions);

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Retrieve a list of matches
 *     tags:
 *      - Matches
 *     description: Retrieve a list of matches from the database. Can be filtered by match ID or status.
 *     parameters:
 *       - in: query
 *         name: competitionId
 *         schema:
 *           type: integer
 *         description: Optional ID of the competition to retrieve matches for.
 *       - in: query
 *         name: matchId
 *         schema:
 *           type: integer
 *         description: Optional ID of the match to retrieve.
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: ["Upcoming", "Live", "Finished", "Cancelled"]
 *         description: Optional status to filter matches by.
 *     responses:
 *       200:
 *         description: A list of matches.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Match'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: Match not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/matches", fetchMatches);

/**
 * @swagger
 * /api/results:
 *   get:
 *     summary: Retrieve match results
 *     tags:
 *      - Results
 *     description: Retrieve a list of match results from the database. Can be filtered by match ID.
 *     parameters:
 *       - in: query
 *         name: matchId
 *         schema:
 *           type: integer
 *         description: Optional ID of the match to retrieve results for.
 *     responses:
 *       200:
 *         description: A list of match results.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Result'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: Result not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/results", fetchResults);

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Retrieve a list of players
 *     tags:
 *       - Players
 *     description: Retrieve a list of players from the database. Can be filtered by player ID.
 *     parameters:
 *       - in: query
 *         name: playerId
 *         schema:
 *           type: integer
 *         description: Optional ID of the player to retrieve.
 *     responses:
 *       200:
 *         description: A list of players.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: Player not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/players", fetchPlayers);

export default router;
