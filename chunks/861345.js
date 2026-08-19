let n = r(864886),
    o = r(46666),
    { ANY: i } = o,
    a = r(74509),
    s = r(4144),
    l = r(800670),
    u = r(596641),
    c = r(738018),
    f = r(569671);
e.exports = (e, t, r, p) => {
    let d, h, m, v, y;
    switch (((e = new n(e, p)), (t = new a(t, p)), r)) {
        case ">":
            (d = l), (h = c), (m = u), (v = ">"), (y = ">=");
            break;
        case "<":
            (d = u), (h = f), (m = l), (v = "<"), (y = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (s(e, t, p)) return !1;
    for (let r = 0; r < t.set.length; ++r) {
        let n = t.set[r],
            a = null,
            s = null;
        if (
            (n.forEach((e) => {
                e.semver === i && (e = new o(">=0.0.0")),
                    (a = a || e),
                    (s = s || e),
                    d(e.semver, a.semver, p) ? (a = e) : m(e.semver, s.semver, p) && (s = e);
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
