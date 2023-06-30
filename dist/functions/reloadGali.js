"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const reloadgali = () => {
    axios_1.default.get(`${process.env.FIREBASE_LINK}.json`).then((res) => {
        return Object.values(res.data);
    }).catch((e) => {
        console.log(e);
        return [];
    });
};
exports.default = reloadgali;
//# sourceMappingURL=reloadGali.js.map