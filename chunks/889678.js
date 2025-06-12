var r = n(706627),
    i = n(885365),
    a = n(67948),
    o = 'Expected a function',
    s = Math.max,
    l = Math.min;
e.exports = function (e, t, n) {
    var c,
        u,
        d,
        _,
        f,
        p,
        h = 0,
        m = !1,
        g = !1,
        E = !0;
    if ('function' != typeof e) throw TypeError(o);
    function b(t) {
        var n = c,
            r = u;
        return (c = u = void 0), (h = t), (_ = e.apply(r, n));
    }
    function y(e) {
        return (h = e), (f = setTimeout(I, t)), m ? b(e) : _;
    }
    function O(e) {
        var n = e - p,
            r = e - h,
            i = t - n;
        return g ? l(i, d - r) : i;
    }
    function v(e) {
        var n = e - p,
            r = e - h;
        return void 0 === p || n >= t || n < 0 || (g && r >= d);
    }
    function I() {
        var e = i();
        if (v(e)) return T(e);
        f = setTimeout(I, O(e));
    }
    function T(e) {
        return ((f = void 0), E && c) ? b(e) : ((c = u = void 0), _);
    }
    function S() {
        return void 0 === f ? _ : T(i());
    }
    function A() {
        var e = i(),
            n = v(e);
        if (((c = arguments), (u = this), (p = e), n)) {
            if (void 0 === f) return y(p);
            if (g) return clearTimeout(f), (f = setTimeout(I, t)), b(p);
        }
        return void 0 === f && (f = setTimeout(I, t)), _;
    }
    return (
        (t = a(t) || 0),
        r(n) && ((m = !!n.leading), (d = (g = 'maxWait' in n) ? s(a(n.maxWait) || 0, t) : d), (E = 'trailing' in n ? !!n.trailing : E)),
        (A.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (c = p = u = f = void 0);
        }),
        (A.flush = S),
        A
    );
};
