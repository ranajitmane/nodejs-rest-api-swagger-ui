/**================================================================ 
            History Of The File 
    Author          - Ranajit Mane 
    Purpose         - Writing - API for the Routes.
==================================================================== **/
var cors = require("cors");
var peopleController = require("../controllers/peopleController");
var swaggerJSDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

module.exports = function (app) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Node js swagger API",
        version: "1.0.0"
      },
      servers: [
        {
          url: "https://9ndbdw.sse.codesandbox.io/"
        }
      ]
    },
    apis: ["src/routes/routes.js"]
  };

  const swaggerSpec = swaggerJSDoc(options);
  app.use("/docs/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  /**
   * @swagger
   * /:
   *  get:
   *    summary: This api is used to get default get
   *    description: This api is used to get default get
   *    responses:
   *          200:
   *            description: To test default Get method
   */
  app.get("/", cors(), (req, res) => {
    res.send(
      "Welcome to node js REST API test with Swagger UI, <a href='/docs'>click here</a> to test REST API through Swagger UI."
    );
  });

  /**
   * @swagger
   * /api/peoples:
   *  get:
   *    summary: This api is used to get people list
   *    description: This api is used to get people list
   *    responses:
   *          200:
   *            description: To test people list
   *            content:
   *              application/json:
   *                schema:
   *                  type: object
   *                  properties:
   *                    count:
   *                      type: integer
   *                    next:
   *                      type: string
   *                    results:
   *                      type: array
   *                      items:
   *                        type: object
   *                        properties:
   *                          name:
   *                            type: string
   */
  app.get("/api/peoples", cors(), peopleController.getPeoples);
};
