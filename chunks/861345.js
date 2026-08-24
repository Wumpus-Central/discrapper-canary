let n = r(864886),
    i = r(46666),
    { ANY: o } = i,
    a = r(74509),
    s = r(4144),
    l = r(800670),
    u = r(596641),
    c = r(738018),
    f = r(569671);
e.exports = (e, t, r, d) => {
    let p, h, m, v, y;
    switch (((e = new n(e, d)), (t = new a(t, d)), r)) {
        case ">":
            (p = l), (h = c), (m = u), (v = ">"), (y = ">=");
            break;
        case "<":
            (p = u), (h = f), (m = l), (v = "<"), (y = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (s(e, t, d)) return !1;
    for (let r = 0; r < t.set.length; ++r) {
        let n = t.set[r],
            a = null,
            s = null;
        if (
            (n.forEach((e) => {
                e.semver === o && (e = new i(">=0.0.0")),
                    (a = a || e),
                    (s = s || e),
                    p(e.semver, a.semver, d) ? (a = e) : m(e.semver, s.semver, d) && (s = e);
            }),
            a.operator === v ||
                a.operator === y ||
                ((!s.operator || s.operator === v) && h(e, s.semver)) ||
                (s.operator === y && m(e, s.semver)))
        )
            return !1;
    }
    return !0;
};
