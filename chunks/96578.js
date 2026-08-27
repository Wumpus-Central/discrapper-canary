t.d(a, { i: () => l });
var r = t(465919),
    n = t(366632),
    i = t(825503),
    o = t(582128);
function l(e) {
    e = (0, r.k)(e ?? {}, u);
    let { locale: a } = (0, n.Y)();
    return (0, o.useMemo)(() => new (0, i.p)(a, e), [a, e]);
}
function u(e, a) {
    if (e === a) return !0;
    let t = Object.keys(e),
        r = Object.keys(a);
    if (t.length !== r.length) return !1;
    for (let r of t) if (a[r] !== e[r]) return !1;
    return !0;
}
