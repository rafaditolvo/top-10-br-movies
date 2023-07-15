"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.LikeSchema = new mongoose_1.Schema({
    movieId: { type: Number, required: true },
    movieName: { type: String, required: true },
    userId: { type: String, required: true },
});
//# sourceMappingURL=like.model.js.map