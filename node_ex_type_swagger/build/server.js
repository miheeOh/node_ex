"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const app = (0, express_1.default)();
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
};
const swaggerDoc = (0, swagger_jsdoc_1.default)(options);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, OPTIONS");
    res.header("Access-Control-Allow-Headers", "content-type, x-access-token, access-type, Authorization, authorization");
    next();
});
app.use(function (err, req, res, next) {
    if (!err)
        return next();
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    if (err.status === undefined) {
        console.log(err.message);
        return res.status(500).json({
            message: "Sorry. The service is not accessible. | Internal Server Error",
            data: err.data
        });
    }
    else {
        return res.status(err.status);
    }
});
app.listen(3000, () => {
    console.log(`server start 3000`);
});
exports.default = app;
//# sourceMappingURL=server.js.map