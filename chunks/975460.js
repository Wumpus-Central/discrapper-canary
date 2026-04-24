n.d(i, { g: () => u, t: () => s });
var t = n(64700),
    a = n(587895),
    l = n(429913),
    o = n(223273),
    r = n(395671),
    d = n(705751);
function s(e) {
    if (null == e) return null;
    if (e.type !== d.S7.GAME) return e;
    let i = e.linkedGames?.find((e) => e.type === o.Mh.OFFICIAL);
    return i?.application ?? a.A.getApplication(i?.id) ?? null;
}
function u(e) {
    let i = null == e || e instanceof r.Ay ? void 0 : e.getOfficialApplicationId(),
        n = (0, l.h)(i);
    return t.useMemo(() => (null == e ? null : e instanceof r.Ay ? s(e) : (n ?? null)), [e, n]);
}
