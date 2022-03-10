"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.path}`);
    next();
}
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=logger.js.map