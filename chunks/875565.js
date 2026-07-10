"use strict";
n.d(e, { Qd: () => r, Qg: () => o });
let i = Object.prototype.toString;
function r(t) {
    return "[object Object]" === i.call(t);
}
function o(t) {
    return !!(t && t.then && "function" == typeof t.then);
}
