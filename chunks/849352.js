t.d(a, { i: () => u });
var r = t(853590),
    n = t(515702),
    i = t(7521),
    o = t(64700);
function u(e) {
    e = (0, i.k)(null != e ? e : {}, l);
    let { locale: a } = (0, r.Y)();
    return (0, o.useMemo)(() => new (0, n.p)(a, e), [a, e]);
}
function l(e, a) {
    if (e === a) return !0;
    let t = Object.keys(e),
        r = Object.keys(a);
    if (t.length !== r.length) return !1;
    for (let r of t) if (a[r] !== e[r]) return !1;
    return !0;
}
