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
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
