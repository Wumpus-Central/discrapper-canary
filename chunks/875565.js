"use strict";
r.d(t, { Qd: () => a, Qg: () => o });
let n = Object.prototype.toString;
function a(e) {
    return "[object Object]" === n.call(e);
}
function o(e) {
    return !!(e && e.then && "function" == typeof e.then);
}
