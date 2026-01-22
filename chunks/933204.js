n.d(t, {
    I: () => c,
    T: () => l,
});
var r = n(64700),
    i = n(417597),
    a = n(71393),
    s = n(209932);
function o(e, t) {
    return e.filter((e) => null == t.get(e));
}
function l() {
    let e = (0, i.yK)([a.A], () => a.A.getGuildIds()),
        t = (0, i.bG)([s.A], () => s.A.getSounds());
    return (0, r.useMemo)(() => o(e, t), [e, t]);
}
function c() {
    return o(a.A.getGuildIds(), s.A.getSounds());
}
