import express  from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';


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

app.use(express.json());
app.use(express.urlencoded({extended: true}));





app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, OPTIONS");
    res.header("Access-Control-Allow-Headers", "content-type, x-access-token, access-type, Authorization, authorization");
    next();
});

app.use(function (
    err: any, req: express.Request, res: express.Response, next: express.NextFunction
) {
    if (!err) return next();

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    if(err.status === undefined ) {
        console.log(err.message);
        return res.status(500).json({
            message:
            "Sorry. The service is not accessible. | Internal Server Error",
            data: err.data
        })
    }else {
        return res.status(err.status);
    }
});


app.listen(3000, () => {
    console.log(`server start 3000`)
})

export default app;