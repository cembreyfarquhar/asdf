"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const bcrypt = __importStar(require("bcryptjs"));
require("dotenv").config();
const password = bcrypt.hashSync("password");
// ugh
const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
async function seed(knex) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(() => {
        // Inserts seed entries
        return knex("users").insert([
            { createdAt, email: "chance@mail.com", password }
        ]);
    });
}
exports.seed = seed;
//# sourceMappingURL=users.js.map