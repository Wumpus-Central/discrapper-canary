"use strict";
n.d(t, { g: () => c, t: () => u });
var i = n(64700),
    r = n(587895),
    s = n(429913),
    a = n(223273),
    o = n(395671),
    l = n(705751);
function u(e) {
    if (null == e) return null;
    if (e.type !== l.S7.GAME) return e;
    let t = e.linkedGames?.find((e) => e.type === a.Mh.OFFICIAL);
    return t?.application ?? r.A.getApplication(t?.id) ?? null;
}
function c(e) {
    let t = null == e || e instanceof o.Ay ? void 0 : e.getOfficialApplicationId(),
        n = (0, s.h)(t);
    return i.useMemo(() => (null == e ? null : e instanceof o.Ay ? u(e) : (n ?? null)), [e, n]);
}
