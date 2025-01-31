n.d(t, {
    DT: () => d,
    Qg: () => u,
    S3: () => o,
    r5: () => c
}),
    n(47120),
    n(411104);
var i = n(688619),
    r = n.n(i);
let a = 3,
    s = 100,
    o = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };
function l(e) {
    let [t, n, i, r] = e.rgba();
    return 'rgba('.concat(t, ', ').concat(n, ', ').concat(i, ', ').concat(r, ')');
}
function u(e) {
    var t, n, i;
    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = null !== (t = u.contrastRatio) && void 0 !== t ? t : o.NonText,
        d = null !== (n = u.tolerance) && void 0 !== n ? n : a,
        f = r()(null !== (i = u.base) && void 0 !== i ? i : e),
        _ = r()(e),
        p = f.luminance(),
        h = _,
        m = c,
        g = c + d,
        E = r().contrast(f, _),
        v = s;
    for (; v-- > 0; ) {
        let e = E < m,
            t = E > g;
        if (!e && !t) break;
        let n = h.luminance() > p;
        (h = (t && n) || (e && !n) ? h.darken() : h.brighten()), (E = r().contrast(f, h));
    }
    return l(h);
}
function c(e, t) {
    return l(r()(e).darken(t));
}
function d(e, t) {
    return l(r()(e).brighten(t));
}
