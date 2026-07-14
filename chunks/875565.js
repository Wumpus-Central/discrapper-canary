"use strict";
n.d(e, { Qd: () => i, Qg: () => o });
let r = Object.prototype.toString;
function i(t) {
    return "[object Object]" === r.call(t);
}
function o(t) {
    return !!(t && t.then && "function" == typeof t.then);
}
