var r = n(706627),
    i = n(885365),
    o = n(67948),
    a = 'Expected a function',
    s = Math.max,
    l = Math.min;
function c(e, t, n) {
    var c,
        u,
        d,
        f,
        p,
        _,
        h = 0,
        m = !1,
        g = !1,
        E = !0;
    if ('function' != typeof e) throw TypeError(a);
    function v(t) {
        var n = c,
            r = u;
        return (c = u = void 0), (h = t), (f = e.apply(r, n));
    }
    function b(e) {
        return (h = e), (p = setTimeout(S, t)), m ? v(e) : f;
    }
    function y(e) {
        var n = e - _,
            r = e - h,
            i = t - n;
        return g ? l(i, d - r) : i;
    }
    function O(e) {
        var n = e - _,
            r = e - h;
        return void 0 === _ || n >= t || n < 0 || (g && r >= d);
    }
    function S() {
        var e = i();
        if (O(e)) return I(e);
        p = setTimeout(S, y(e));
    }
    function I(e) {
        return ((p = void 0), E && c) ? v(e) : ((c = u = void 0), f);
    }
    function T() {
        void 0 !== p && clearTimeout(p), (h = 0), (c = _ = u = p = void 0);
    }
    function N() {
        return void 0 === p ? f : I(i());
    }
    function A() {
        var e = i(),
            n = O(e);
        if (((c = arguments), (u = this), (_ = e), n)) {
            if (void 0 === p) return b(_);
            if (g) return clearTimeout(p), (p = setTimeout(S, t)), v(_);
        }
        return void 0 === p && (p = setTimeout(S, t)), f;
    }
    return (t = o(t) || 0), r(n) && ((m = !!n.leading), (d = (g = 'maxWait' in n) ? s(o(n.maxWait) || 0, t) : d), (E = 'trailing' in n ? !!n.trailing : E)), (A.cancel = T), (A.flush = N), A;
}
e.exports = c;
