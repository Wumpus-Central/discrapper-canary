function i(e) {
    return '[object Object]' === Object.prototype.toString.call(e);
}
function r(e) {
    var t, n;
    return !1 !== i(e) && (void 0 === (t = e.constructor) || (!1 !== i((n = t.prototype)) && !1 !== n.hasOwnProperty('isPrototypeOf')));
}
n.d(t, { P: () => r });
