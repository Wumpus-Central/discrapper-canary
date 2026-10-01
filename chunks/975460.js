n.d(t, { g: () => s, t: () => c });
var i = n(582128),
    l = n(155718),
    r = n(587895),
    o = n(429913),
    u = n(395671),
    a = n(705751);
function c(e) {
    if (null == e) return null;
    if (e.type !== a.S7.GAME) return e;
    let t = e.linkedGames?.find((e) => e.type === l.Mh.OFFICIAL);
    return t?.application ?? r.A.getApplication(t?.id) ?? null;
}
function s(e) {
    let t = null == e || e instanceof u.Ay ? void 0 : e.getOfficialApplicationId(),
        n = (0, o.h)(t);
    return i.useMemo(() => (null == e ? null : e instanceof u.Ay ? c(e) : (n ?? null)), [e, n]);
}
