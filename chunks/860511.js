var n = function (r) {
    return r && r.Math === Math && r;
};
r.exports =
    n("object" == typeof globalThis && globalThis) ||
    n("object" == typeof window && window) ||
    n("object" == typeof self && self) ||
    n("object" == typeof e.g && e.g) ||
    n("object" == typeof this && this) ||
    (function () {
        return this;
    })() ||
    Function("return this")();
