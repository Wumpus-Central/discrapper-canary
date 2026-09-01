var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 });
let a = n(r(67326));
class i extends a.default {
    patternBetween() {
        return /^\s*(\u0438 \u0434\u043e|\u0438 \u043f\u043e|\u0434\u043e|\u043f\u043e|-)\s*$/i;
    }
}
t.default = i;
