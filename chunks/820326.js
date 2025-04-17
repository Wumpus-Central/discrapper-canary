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
function i(e, t) {
    void 0 === t && (t = r);
    var n = null;
    function o() {
        for (var o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
        if (n && n.lastThis === this && t(o, n.lastArgs)) return n.lastResult;
        var i = e.apply(this, o);
        return (
            (n = {
                lastResult: i,
                lastArgs: o,
                lastThis: this
            }),
            i
        );
    }
    return (
        (o.clear = function () {
            n = null;
        }),
        o
    );
}
