let r = n(864886),
    i = n(46666),
    { ANY: a } = i,
    s = n(74509),
    o = n(4144),
    l = n(800670),
    c = n(596641),
    u = n(738018),
    d = n(569671);
e.exports = (e, t, n, f) => {
    let p, _, h, m, g;
    switch (((e = new r(e, f)), (t = new s(t, f)), n)) {
        case ">":
            (p = l), (_ = u), (h = c), (m = ">"), (g = ">=");
            break;
        case "<":
            (p = c), (_ = d), (h = l), (m = "<"), (g = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (o(e, t, f)) return !1;
    for (let n = 0; n < t.set.length; ++n) {
        let r = t.set[n],
            s = null,
            o = null;
        if (
            (r.forEach((e) => {
                e.semver === a && (e = new i(">=0.0.0")),
                    (s = s || e),
                    (o = o || e),
                    p(e.semver, s.semver, f) ? (s = e) : h(e.semver, o.semver, f) && (o = e);
            }),
            s.operator === m ||
                s.operator === g ||
                ((!o.operator || o.operator === m) && _(e, o.semver)) ||
                (o.operator === g && h(e, o.semver)))
        )
            return !1;
    }
    return !0;
};
