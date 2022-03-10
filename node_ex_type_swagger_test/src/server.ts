import express, { application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import * as bodyParser from 'body-parser';

import { loggerMiddleware } from './middleware/logger';

const app = express();

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "0.0.1",
            title: "node-session",
            description: "node-session-auth"
        },
        servers: [{
            description: "session auth",
            url: "http://localhost:3000"
        }]
    },
    apis: [
        "build/swagger/models.js",
        "build/api/*.js"
    ]
}

const swaggerDoc = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(loggerMiddleware);
app.use(bodyParser.json());


import indexRoute from './api/index';

app.use('/api/v1', indexRoute);

app.listen(3000, () => {
    console.log(`server start 3000`)
})
