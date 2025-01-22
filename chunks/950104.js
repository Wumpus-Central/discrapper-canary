r.d(n, {
    DT: function () {
        return h;
    },
    Qg: function () {
        return f;
    },
    S3: function () {
        return c;
    },
    r5: function () {
        return p;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(688619),
    s = r.n(o);
let l = 3,
    u = 100,
    c = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };
function d(e) {
    let [n, r, i, a] = e.rgba();
    return 'rgba('.concat(n, ', ').concat(r, ', ').concat(i, ', ').concat(a, ')');
}
function f(e) {
    var n, r, i;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = null !== (n = a.contrastRatio) && void 0 !== n ? n : c.NonText,
        f = null !== (r = a.tolerance) && void 0 !== r ? r : l,
        p = s()(null !== (i = a.base) && void 0 !== i ? i : e),
        h = s()(e),
        _ = p.luminance(),
        m = h,
        g = o,
        E = o + f,
        v = s().contrast(p, h),
        y = u;
    for (; y-- > 0; ) {
        let e = v < g,
            n = v > E;
        if (!e && !n) break;
        let r = m.luminance() > _;
        (m = (n && r) || (e && !r) ? m.darken() : m.brighten()), (v = s().contrast(p, m));
    }
    return d(m);
}
function p(e, n) {
    return d(s()(e).darken(n));
}
function h(e, n) {
    return d(s()(e).brighten(n));
}
