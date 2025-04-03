n.d(t, { Z: () => i });
var o =
    Number.isNaN ||
    function (e) {
        return 'number' == typeof e && e != e;
    };
function r(e, t) {
    if (e.length !== t.length) return !1;
    for (var n, r, i = 0; i < e.length; i++) if (!((n = e[i]) === (r = t[i]) || (o(n) && o(r))) && 1) return !1;
    return !0;
}
let i = function (e, t) {
    void 0 === t && (t = r);
    var n,
        o,
        i = [],
        a = !1;
    return function () {
        for (var r = [], u = 0; u < arguments.length; u++) r[u] = arguments[u];
        return (a && n === this && t(r, i)) || ((o = e.apply(this, r)), (a = !0), (n = this), (i = r)), o;
    };
};
