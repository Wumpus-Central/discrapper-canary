n.d(t, { I: () => d, T: () => o });
var i = n(64700),
    r = n(702841),
    l = n(71393),
    a = n(209932);
function s(e, t) {
    return e.filter((e) => null == t.get(e));
}
function o() {
    let e = (0, r.yK)([l.A], () => l.A.getGuildIds()),
        t = (0, r.bG)([a.A], () => a.A.getSounds());
    return (0, i.useMemo)(() => s(e, t), [e, t]);
}
function d() {
    return s(l.A.getGuildIds(), a.A.getSounds());
}
