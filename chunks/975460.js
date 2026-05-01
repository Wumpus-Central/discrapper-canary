l.d(n, { g: () => s, t: () => d });
var a = l(64700),
    o = l(587895),
    t = l(429913),
    i = l(223273),
    u = l(395671),
    r = l(705751);
function d(e) {
    if (null == e) return null;
    if (e.type !== r.S7.GAME) return e;
    let n = e.linkedGames?.find((e) => e.type === i.Mh.OFFICIAL);
    return n?.application ?? o.A.getApplication(n?.id) ?? null;
}
function s(e) {
    let n = null == e || e instanceof u.Ay ? void 0 : e.getOfficialApplicationId(),
        l = (0, t.h)(n);
    return a.useMemo(() => (null == e ? null : e instanceof u.Ay ? d(e) : (l ?? null)), [e, l]);
}
