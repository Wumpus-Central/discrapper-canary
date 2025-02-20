n.d(t, {
    DT: () => d,
    Qg: () => c,
    S3: () => s,
    r5: () => u
}),
    n(47120),
    n(411104);
var r = n(688619),
    i = n.n(r);
let o = 3,
    a = 100,
    s = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };
function l(e) {
    let [t, n, r, i] = e.rgba();
    return 'rgba('.concat(t, ', ').concat(n, ', ').concat(r, ', ').concat(i, ')');
}
function c(e) {
    var t, n, r;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = null !== (t = c.contrastRatio) && void 0 !== t ? t : s.NonText,
        d = null !== (n = c.tolerance) && void 0 !== n ? n : o,
        f = i()(null !== (r = c.base) && void 0 !== r ? r : e),
        p = i()(e),
        _ = f.luminance(),
        h = p,
        m = u,
        g = u + d,
        E = i().contrast(f, p),
        v = a;
    for (; v-- > 0; ) {
        let e = E < m,
            t = E > g;
        if (!e && !t) break;
        let n = h.luminance() > _;
        (h = (t && n) || (e && !n) ? h.darken() : h.brighten()), (E = i().contrast(f, h));
    }
    return l(h);
}
function u(e, t) {
    return l(i()(e).darken(t));
}
function d(e, t) {
    return l(i()(e).brighten(t));
}
