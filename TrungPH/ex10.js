"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.promisify = void 0;
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
function promisify(fn) {
    return function () { return new Promise(function (resolve, reject) {
        fn(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            }
            else {
                reject(new Error(response.error));
            }
        });
    }); };
}
exports.promisify = promisify;
var oldApi = {
    requestAdmins: function (callback) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers: function (callback) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime: function (callback) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength: function (callback) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};
exports.api = {
    requestAdmins: promisify(oldApi.requestAdmins),
    requestUsers: promisify(oldApi.requestUsers),
    requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
    requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
};
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function startTheApp() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    console.log('Admins:');
                    return [4 /*yield*/, exports.api.requestAdmins()];
                case 1:
                    (_h.sent()).forEach(logPerson);
                    console.log();
                    console.log('Users:');
                    return [4 /*yield*/, exports.api.requestUsers()];
                case 2:
                    (_h.sent()).forEach(logPerson);
                    console.log();
                    console.log('Server time:');
                    _b = (_a = console).log;
                    _c = "   ".concat;
                    _d = Date.bind;
                    return [4 /*yield*/, exports.api.requestCurrentServerTime()];
                case 3:
                    _b.apply(_a, [_c.apply("   ", [new (_d.apply(Date, [void 0, _h.sent()]))().toLocaleString()])]);
                    console.log();
                    console.log('Coffee machine queue length:');
                    _f = (_e = console).log;
                    _g = "   ".concat;
                    return [4 /*yield*/, exports.api.requestCoffeeMachineQueueLength()];
                case 4:
                    _f.apply(_e, [_g.apply("   ", [_h.sent()])]);
                    return [2 /*return*/];
            }
        });
    });
}
startTheApp().then(function () {
    console.log('Success!');
}, function (e) {
    console.log("Error: \"".concat(e.message, "\", but it's fine, sometimes errors are inevitable."));
});
