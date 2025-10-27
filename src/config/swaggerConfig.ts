import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Public API",
      version: "1.0.0",
      description: "API documentation for the Public API project",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
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
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
