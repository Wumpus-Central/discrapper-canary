var i = r(706627),
    a = r(885365),
    o = r(67948),
    s = 'Expected a function',
    l = Math.max,
    u = Math.min;
function c(e, n, r) {
    var c,
        d,
        f,
        p,
        h,
        _,
        m = 0,
        g = !1,
        E = !1,
        v = !0;
    if ('function' != typeof e) throw TypeError(s);
    function y(n) {
        var r = c,
            i = d;
        return (c = d = void 0), (m = n), (p = e.apply(i, r));
    }
    function b(e) {
        return (m = e), (h = setTimeout(S, n)), g ? y(e) : p;
    }
    function I(e) {
        var r = e - _,
            i = e - m,
            a = n - r;
        return E ? u(a, f - i) : a;
    }
    function T(e) {
        var r = e - _,
            i = e - m;
        return void 0 === _ || r >= n || r < 0 || (E && i >= f);
    }
    function S() {
        var e = a();
        if (T(e)) return A(e);
        h = setTimeout(S, I(e));
    }
    function A(e) {
        return ((h = void 0), v && c) ? y(e) : ((c = d = void 0), p);
    }
    function C() {
        void 0 !== h && clearTimeout(h), (m = 0), (c = _ = d = h = void 0);
    }
    function N() {
        return void 0 === h ? p : A(a());
    }
    function R() {
        var e = a(),
            r = T(e);
        if (((c = arguments), (d = this), (_ = e), r)) {
            if (void 0 === h) return b(_);
            if (E) return clearTimeout(h), (h = setTimeout(S, n)), y(_);
        }
        return void 0 === h && (h = setTimeout(S, n)), p;
    }
    return (n = o(n) || 0), i(r) && ((g = !!r.leading), (f = (E = 'maxWait' in r) ? l(o(r.maxWait) || 0, n) : f), (v = 'trailing' in r ? !!r.trailing : v)), (R.cancel = C), (R.flush = N), R;
}
e.exports = c;
