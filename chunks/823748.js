"use strict";
n.d(t, { Bp: () => E, EX: () => _, TF: () => A });
var i = n(582128),
    r = n(17928),
    a = n(71393),
    s = n(576705),
    l = n(363487),
    o = n(469014),
    d = n(488803),
    c = n(522055);
function u(e, t, n) {
    let i = !0 === (0, l.G)(t, e),
        r = (0, d.TS)(e.id, n);
    return i && r;
}
function _(e) {
    return (0, r.yK)([a.A, s.A], () => a.A.getGuildsArray().filter((t) => u(t, s.A, e)));
}
function E(e) {
    return (0, r.bG)([a.A, s.A], () => a.A.getGuildsArray().some((t) => u(t, s.A, e)));
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldFetch: n = !1 } = t,
        a = (0, r.bG)([c.A], () => {
            if (null == e) return !1;
            let { catalog: t } = c.A.getGlobalCatalogState();
            return Object.values(t).some((t) => t.gameId === e);
        }, [e]),
        s = (0, r.bG)([c.A], () => c.A.shouldFetchGlobalCatalog());
    return (
        i.useEffect(() => {
            null != e && n && s && (0, o.K)();
        }, [e, n, s]),
        a
    );
}
