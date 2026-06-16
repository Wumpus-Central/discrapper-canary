let i = n(864886),
    r = n(46666),
    { ANY: s } = r,
    a = n(74509),
    o = n(4144),
    l = n(800670),
    u = n(596641),
    c = n(738018),
    d = n(569671);
e.exports = (e, t, n, _) => {
    let h, f, p, E, m;
    switch (((e = new i(e, _)), (t = new a(t, _)), n)) {
        case ">":
            (h = l), (f = c), (p = u), (E = ">"), (m = ">=");
            break;
        case "<":
            (h = u), (f = d), (p = l), (E = "<"), (m = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (o(e, t, _)) return !1;
    for (let n = 0; n < t.set.length; ++n) {
        let i = t.set[n],
            a = null,
            o = null;
        if (
            (i.forEach((e) => {
                e.semver === s && (e = new r(">=0.0.0")),
                    (a = a || e),
                    (o = o || e),
                    h(e.semver, a.semver, _) ? (a = e) : p(e.semver, o.semver, _) && (o = e);
            }),
            a.operator === E ||
                a.operator === m ||
                ((!o.operator || o.operator === E) && f(e, o.semver)) ||
                (o.operator === m && p(e, o.semver)))
        )
            return !1;
    }
    return !0;
};
