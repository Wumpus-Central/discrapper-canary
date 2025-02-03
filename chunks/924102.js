n.d(t, { Z: () => u });
var i = n(675717),
    r = n(595250),
    a = n(220955),
    s = 'Expected a function',
    o = Math.max,
    l = Math.min;
let u = function (e, t, n) {
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
        return (h = e), (_ = setTimeout(T, t)), m ? v(e) : f;
    }
    function I(e) {
        var n = e - p,
            i = e - h,
            r = t - n;
        return g ? l(r, d - i) : r;
    }
    function b(e) {
        var n = e - p,
            i = e - h;
        return void 0 === p || n >= t || n < 0 || (g && i >= d);
    }
    function T() {
        var e = (0, r.Z)();
        if (b(e)) return S(e);
        _ = setTimeout(T, I(e));
    }
    function S(e) {
        return ((_ = void 0), E && u) ? v(e) : ((u = c = void 0), f);
    }
    function A() {
        void 0 !== _ && clearTimeout(_), (h = 0), (u = p = c = _ = void 0);
    }
    function N() {
        return void 0 === _ ? f : S((0, r.Z)());
    }
    function C() {
        var e = (0, r.Z)(),
            n = b(e);
        if (((u = arguments), (c = this), (p = e), n)) {
            if (void 0 === _) return y(p);
            if (g) return clearTimeout(_), (_ = setTimeout(T, t)), v(p);
        }
        return void 0 === _ && (_ = setTimeout(T, t)), f;
    }
    return (t = (0, a.Z)(t) || 0), (0, i.Z)(n) && ((m = !!n.leading), (d = (g = 'maxWait' in n) ? o((0, a.Z)(n.maxWait) || 0, t) : d), (E = 'trailing' in n ? !!n.trailing : E)), (C.cancel = A), (C.flush = N), C;
};
