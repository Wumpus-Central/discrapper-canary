"use strict";
n.d(t, { Qd: () => r, Qg: () => s });
let i = Object.prototype.toString;
function r(e) {
    return "[object Object]" === i.call(e);
}
function s(e) {
    return !!(e && e.then && "function" == typeof e.then);
}
