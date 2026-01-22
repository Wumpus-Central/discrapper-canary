n.d(t, { i: () => o });
var r = n(853590),
    i = n(515702),
    a = n(7521),
    s = n(64700);
function o(e) {
    e = (0, a.k)(null != e ? e : {}, l);
    let { locale: t } = (0, r.Y)();
    return (0, s.useMemo)(() => new (0, i.p)(t, e), [t, e]);
}
function l(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) if (t[r] !== e[r]) return !1;
    return !0;
}
