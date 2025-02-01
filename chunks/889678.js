var i = n(706627),
    r = n(885365),
    a = n(67948),
    s = 'Expected a function',
    o = Math.max,
    l = Math.min;
function u(e, t, n) {
    var u,
        c,
        d,
        f,
        _,
        p,
        h = 0,
        m = !1,
        g = !1,
        E = !0;
    if ('function' != typeof e) throw TypeError(s);
    function v(t) {
        var n = u,
            i = c;
        return (u = c = void 0), (h = t), (f = e.apply(i, n));
    }
    function y(e) {
        return (h = e), (_ = setTimeout(b, t)), m ? v(e) : f;
    }
    function I(e) {
        var n = e - p,
            i = e - h,
            r = t - n;
        return g ? l(r, d - i) : r;
    }
    function T(e) {
        var n = e - p,
            i = e - h;
        return void 0 === p || n >= t || n < 0 || (g && i >= d);
    }
    function b() {
        var e = r();
        if (T(e)) return S(e);
        _ = setTimeout(b, I(e));
    }
    function S(e) {
        return ((_ = void 0), E && u) ? v(e) : ((u = c = void 0), f);
    }
    function A() {
        void 0 !== _ && clearTimeout(_), (h = 0), (u = p = c = _ = void 0);
    }
    function N() {
        return void 0 === _ ? f : S(r());
    }
    function C() {
        var e = r(),
            n = T(e);
        if (((u = arguments), (c = this), (p = e), n)) {
            if (void 0 === _) return y(p);
            if (g) return clearTimeout(_), (_ = setTimeout(b, t)), v(p);
        }
        return void 0 === _ && (_ = setTimeout(b, t)), f;
    }
    return (t = a(t) || 0), i(n) && ((m = !!n.leading), (d = (g = 'maxWait' in n) ? o(a(n.maxWait) || 0, t) : d), (E = 'trailing' in n ? !!n.trailing : E)), (C.cancel = A), (C.flush = N), C;
}
e.exports = u;
