import { Router } from "express";
import { fetchCompetitions } from "../controllers/competitionsController";

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

export default router;
