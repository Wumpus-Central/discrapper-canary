t.d(i, { g: () => o, t: () => r });
var l = t(64700),
    e = t(155718),
    u = t(587895),
    p = t(429913),
    a = t(395671),
    c = t(705751);
function r(n) {
    if (null == n) return null;
    if (n.type !== c.S7.GAME) return n;
    let i = n.linkedGames?.find((n) => n.type === e.Mh.OFFICIAL);
    return i?.application ?? u.A.getApplication(i?.id) ?? null;
}
function o(n) {
    let i = null == n || n instanceof a.Ay ? void 0 : n.getOfficialApplicationId(),
        t = (0, p.h)(i);
    return l.useMemo(() => (null == n ? null : n instanceof a.Ay ? r(n) : (t ?? null)), [n, t]);
}
