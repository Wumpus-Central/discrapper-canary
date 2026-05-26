l.d(n, { g: () => s, t: () => r });
var a = l(64700),
    t = l(155718),
    o = l(587895),
    i = l(429913),
    u = l(395671),
    d = l(705751);
function r(e) {
    if (null == e) return null;
    if (e.type !== d.S7.GAME) return e;
    let n = e.linkedGames?.find((e) => e.type === t.Mh.OFFICIAL);
    return n?.application ?? o.A.getApplication(n?.id) ?? null;
}
function s(e) {
    let n = null == e || e instanceof u.Ay ? void 0 : e.getOfficialApplicationId(),
        l = (0, i.h)(n);
    return a.useMemo(() => (null == e ? null : e instanceof u.Ay ? r(e) : (l ?? null)), [e, l]);
}
