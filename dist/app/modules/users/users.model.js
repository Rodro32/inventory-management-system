"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    needsPasswordChange: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'supplier', 'customer'],
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
exports.User = (0, mongoose_1.model)('User', userSchema);
