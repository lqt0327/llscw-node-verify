"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlscwNodeAuth = void 0;
const random_1 = require("./random");
var CryptoJS = require("crypto-js");
class LlscwNodeAuth {
    makePassword(password) {
        const randomStr = CryptoJS.enc.Utf8.parse(random_1.default());
        const base64RandomStr = CryptoJS.enc.Base64.stringify(randomStr);
        return this.md5MakePassword(base64RandomStr, password);
    }
    checkPassword(password, sqlPwd) {
        const base64RandomStr = sqlPwd.substring(0, 16);
        const lastPwd = this.md5MakePassword(base64RandomStr, password);
        return sqlPwd === lastPwd;
    }
    md5MakePassword(base64RandomStr, password) {
        const newPwd = base64RandomStr + password;
        const md5Pwd = CryptoJS.HmacSHA512(newPwd, "llscw");
        const base64Md5 = CryptoJS.enc.Base64.stringify(md5Pwd);
        const lastPwd = base64RandomStr + base64Md5;
        return lastPwd;
    }
}
exports.LlscwNodeAuth = LlscwNodeAuth;
exports.default = LlscwNodeAuth;
