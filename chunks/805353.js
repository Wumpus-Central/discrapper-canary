var r = n(509185),
    i = n(73224),
    s = n(112746),
    a = Math.max,
    o = Math.min;
e.exports = function (e, t, n) {
    var l,
        u,
        d,
        c,
        _,
        f,
        E = 0,
        h = !1,
        p = !1,
        m = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function g(t) {
        var n = l,
            r = u;
        return (l = u = void 0), (E = t), (c = e.apply(r, n));
    }
    function A(e) {
        var n = e - f,
            r = e - E;
        return void 0 === f || n >= t || n < 0 || (p && r >= d);
    }
    function I() {
        var e,
            n,
            r,
            s = i();
        if (A(s)) return T(s);
        _ = setTimeout(I, ((e = s - f), (n = s - E), (r = t - e), p ? o(r, d - n) : r));
    }
    function T(e) {
        return ((_ = void 0), m && l) ? g(e) : ((l = u = void 0), c);
    }
    function S() {
        var e,
            n = i(),
            r = A(n);
        if (((l = arguments), (u = this), (f = n), r)) {
            if (void 0 === _) return (E = e = f), (_ = setTimeout(I, t)), h ? g(e) : c;
            if (p) return clearTimeout(_), (_ = setTimeout(I, t)), g(f);
        }
        return void 0 === _ && (_ = setTimeout(I, t)), c;
    }
    return (
        (t = s(t) || 0),
        r(n) &&
            ((h = !!n.leading),
            (d = (p = "maxWait" in n) ? a(s(n.maxWait) || 0, t) : d),
            (m = "trailing" in n ? !!n.trailing : m)),
        (S.cancel = function () {
            void 0 !== _ && clearTimeout(_), (E = 0), (l = f = u = _ = void 0);
        }),
        (S.flush = function () {
            return void 0 === _ ? c : T(i());
        }),
        S
    );
};
