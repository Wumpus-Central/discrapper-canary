r.d(t, { Qd: () => i, Qg: () => o });
let n = Object.prototype.toString;
function i(e) {
    return "[object Object]" === n.call(e);
}
function o(e) {
    return !!(e && e.then && "function" == typeof e.then);
}
