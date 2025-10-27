import { Router } from "express";
import { fetchCompetitions } from "../controllers/competitionController";
import { fetchMatches } from "../controllers/matchController";
import { fetchResults } from "../controllers/resultController";

const router: Router = Router();

/**
 * @swagger
 * /api/competitions:
 *   get:
 *     summary: Retrieve a list of competitions
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
 */
router.get("/competitions", fetchCompetitions);

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Retrieve a list of matches
 *     description: Retrieve a list of matches from the database. Can be filtered by match ID or status.
 *     parameters:
 *       - in: query
 *         name: matchId
 *         schema:
 *           type: integer
 *         description: Optional ID of the match to retrieve.
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [SCHEDULED, IN_PROGRESS, COMPLETED]
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
 */
router.get("/matches", fetchMatches);

/**
 * @swagger
 * /api/results:
 *   get:
 *     summary: Retrieve match results
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
 */
router.get("/results", fetchResults);

export default router;
