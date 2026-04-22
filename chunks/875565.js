"use strict";
s.d(e, { Qd: () => i, Qg: () => n });
let r = Object.prototype.toString;
function i(t) {
    return "[object Object]" === r.call(t);
}
function n(t) {
    return !!(t && t.then && "function" == typeof t.then);
}
