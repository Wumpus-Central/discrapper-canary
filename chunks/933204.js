n.d(t, { I: () => d, T: () => o });
var i = n(64700),
    l = n(702841),
    a = n(71393),
    r = n(209932);
function s(e, t) {
    return e.filter((e) => null == t.get(e));
}
function o() {
    let e = (0, l.yK)([a.A], () => a.A.getGuildIds()),
        t = (0, l.bG)([r.A], () => r.A.getSounds());
    return (0, i.useMemo)(() => s(e, t), [e, t]);
}
function d() {
    return s(a.A.getGuildIds(), r.A.getSounds());
}
