"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = Log;
function Log(req, res, next) {
    console.log('function log');
    next();
}
//# sourceMappingURL=log.middleware.js.map