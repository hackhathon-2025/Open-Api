import { Router } from "express";
import { fetchCompetitions } from "../controllers/competitionController";
import { fetchMatches } from "../controllers/matchController";

const router = Router();

/**
 * @swagger
 * /api/competitions:
 *   get:
 *     summary: Retrieve a list of competitions
 *     description: Retrieve a list of competitions from the database.
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
 *     description: Retrieve a list of matches from the database.
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

export default router;
