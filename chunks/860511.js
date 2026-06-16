"use strict";
var i = function (e) {
    return e && e.Math === Math && e;
};
e.exports =
    i("object" == typeof globalThis && globalThis) ||
    i("object" == typeof window && window) ||
    i("object" == typeof self && self) ||
    i("object" == typeof n.g && n.g) ||
    i("object" == typeof this && this) ||
    (function () {
        return this;
    })() ||
    Function("return this")();
