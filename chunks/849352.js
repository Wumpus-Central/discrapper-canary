t.d(a, { i: () => o });
var n = t(402112),
    r = t(515702),
    i = t(7521),
    l = t(64700);
function o(e) {
    e = (0, i.k)(null != e ? e : {}, u);
    let { locale: a } = (0, n.Y)();
    return (0, l.useMemo)(() => new (0, r.p)(a, e), [a, e]);
}
function u(e, a) {
    if (e === a) return !0;
    let t = Object.keys(e),
        n = Object.keys(a);
    if (t.length !== n.length) return !1;
    for (let n of t) if (a[n] !== e[n]) return !1;
    return !0;
}
