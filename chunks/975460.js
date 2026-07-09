"use strict";
n.d(t, { g: () => c, t: () => d });
var i = n(64700),
    r = n(155718),
    a = n(587895),
    s = n(429913),
    l = n(395671),
    o = n(705751);
function d(e) {
    if (null == e) return null;
    if (e.type !== o.S7.GAME) return e;
    let t = e.linkedGames?.find((e) => e.type === r.Mh.OFFICIAL);
    return t?.application ?? a.A.getApplication(t?.id) ?? null;
}
function c(e) {
    let t = null == e || e instanceof l.Ay ? void 0 : e.getOfficialApplicationId(),
        n = (0, s.h)(t);
    return i.useMemo(() => (null == e ? null : e instanceof l.Ay ? d(e) : (n ?? null)), [e, n]);
}
