"use strict";
n.d(t, { Qd: () => s, Qg: () => a });
let r = Object.prototype.toString;
function i(e, t) {
    return r.call(e) === `[object ${t}]`;
}
function s(e) {
    return i(e, "Object");
}
function a(e) {
    return !!(e && e.then && "function" == typeof e.then);
}
