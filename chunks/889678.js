var r = n(706627),
    i = n(885365),
    o = n(67948),
    a = 'Expected a function',
    s = Math.max,
    l = Math.min;
e.exports = function (e, t, n) {
    var c,
        u,
        d,
        f,
        _,
        p,
        h = 0,
        m = !1,
        g = !1,
        E = !0;
    if ('function' != typeof e) throw TypeError(a);
    function b(t) {
        var n = c,
            r = u;
        return (c = u = void 0), (h = t), (f = e.apply(r, n));
    }
    function y(e) {
        return (h = e), (_ = setTimeout(I, t)), m ? b(e) : f;
    }
    function v(e) {
        var n = e - p,
            r = e - h,
            i = t - n;
        return g ? l(i, d - r) : i;
    }
    function O(e) {
        var n = e - p,
            r = e - h;
        return void 0 === p || n >= t || n < 0 || (g && r >= d);
    }
    function I() {
        var e = i();
        if (O(e)) return S(e);
        _ = setTimeout(I, v(e));
    }
    function S(e) {
        return ((_ = void 0), E && c) ? b(e) : ((c = u = void 0), f);
    }
    function T() {
        return void 0 === _ ? f : S(i());
    }
    function N() {
        var e = i(),
            n = O(e);
        if (((c = arguments), (u = this), (p = e), n)) {
            if (void 0 === _) return y(p);
            if (g) return clearTimeout(_), (_ = setTimeout(I, t)), b(p);
        }
        return void 0 === _ && (_ = setTimeout(I, t)), f;
    }
    return (
        (t = o(t) || 0),
        r(n) && ((m = !!n.leading), (d = (g = 'maxWait' in n) ? s(o(n.maxWait) || 0, t) : d), (E = 'trailing' in n ? !!n.trailing : E)),
        (N.cancel = function () {
            void 0 !== _ && clearTimeout(_), (h = 0), (c = p = u = _ = void 0);
        }),
        (N.flush = T),
        N
    );
};
