import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Public API",
      version: "1.0.0",
      description: "API documentation for the Public API project",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      schemas: {
        Competition: {
          type: "object",
          required: ["id", "name", "date", "location"],
          properties: {
            id: {
              type: "string",
              description: "The auto-generated id of the competition",
            },
            name: {
              type: "string",
              description: "The name of the competition",
            },
            date: {
              type: "string",
              format: "date",
              description: "The date of the competition",
            },
            location: {
              type: "string",
              description: "The location of the competition",
            },
          },
        },
        Match: {
          type: "object",
          required: ["id", "competition_id", "player1_id", "player2_id", "start_time", "round", "status"],
          properties: {
            id: {
              type: "number",
              description: "The auto-generated id of the match",
            },
            competition_id: {
              type: "number",
              description: "The id of the competition the match belongs to",
            },
            player1_id: {
              type: "number",
              description: "The id of the first player",
            },
            player2_id: {
              type: "number",
              description: "The id of the second player",
            },
            start_time: {
              type: "string",
              format: "date-time",
              description: "The start time of the match",
            },
            round: {
              type: "string",
              description: "The round of the match (e.g., '1er Tour', 'Demi-Finale')",
            },
            status: {
              type: "string",
              enum: ["Upcoming", "Live", "Finished", "Cancelled"],
              description: "The current status of the match",
            },
          },
        },
        LiveScore: {
          type: "object",
          required: ["set", "game", "point"],
          properties: {
            set: {
              type: "number",
              description: "Current set number",
            },
            game: {
              type: "number",
              description: "Current game number in the set",
            },
            point: {
              type: "string",
              description: "Current point score (e.g., '40-15')",
            },
          },
        },
        ScoreSets: {
          type: "object",
          required: ["p1", "p2"],
          properties: {
            p1: {
              type: "array",
              items: {
                type: "number",
              },
              description: "Scores for player 1 per set",
            },
            p2: {
              type: "array",
              items: {
                type: "number",
              },
              description: "Scores for player 2 per set",
            },
          },
        },
        Result: {
          type: "object",
          required: ["match_id", "updated_at"],
          properties: {
            match_id: {
              type: "number",
              description: "The ID of the match",
            },
            winner_id: {
              type: "number",
              nullable: true,
              description: "The ID of the winning player (null if match is live)",
            },
            score_sets: {
              $ref: "#/components/schemas/ScoreSets",
              nullable: true,
              description: "Final scores per set (null if match is upcoming or live)",
            },
            live_score: {
              $ref: "#/components/schemas/LiveScore",
              nullable: true,
              description: "Live score details (null if match is not live)",
            },
            duration: {
              type: "number",
              nullable: true,
              description: "Duration of the match in minutes",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              description: "Timestamp of the last update",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
