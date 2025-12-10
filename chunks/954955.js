var r = n(661233),
    i = n(586769),
    a = n(675769),
    o = "Expected a function",
    s = Math.max,
    l = Math.min;
e.exports = function (e, t, n) {
    var c,
        u,
        d,
        f,
        p,
        _,
        m = 0,
        h = !1,
        g = !1,
        E = !0;
    if ("function" != typeof e) throw TypeError(o);
    function b(t) {
        var n = c,
            r = u;
        return (c = u = void 0), (m = t), (f = e.apply(r, n));
    }
    function y(e) {
        return (m = e), (p = setTimeout(S, t)), h ? b(e) : f;
    }
    function O(e) {
        var n = e - _,
            r = e - m,
            i = t - n;
        return g ? l(i, d - r) : i;
    }
    function v(e) {
        var n = e - _,
            r = e - m;
        return void 0 === _ || n >= t || n < 0 || (g && r >= d);
    }
    function S() {
        var e = i();
        if (v(e)) return I(e);
        p = setTimeout(S, O(e));
    }
    function I(e) {
        return ((p = void 0), E && c) ? b(e) : ((c = u = void 0), f);
    }
    function T() {
        return void 0 === p ? f : I(i());
    }
    function C() {
        var e = i(),
            n = v(e);
        if (((c = arguments), (u = this), (_ = e), n)) {
            if (void 0 === p) return y(_);
            if (g) return clearTimeout(p), (p = setTimeout(S, t)), b(_);
        }
        return void 0 === p && (p = setTimeout(S, t)), f;
    }
    return (
        (t = a(t) || 0),
        r(n) &&
            ((h = !!n.leading),
            (d = (g = "maxWait" in n) ? s(a(n.maxWait) || 0, t) : d),
            (E = "trailing" in n ? !!n.trailing : E)),
        (C.cancel = function () {
            void 0 !== p && clearTimeout(p), (m = 0), (c = _ = u = p = void 0);
        }),
        (C.flush = T),
        C
    );
};
