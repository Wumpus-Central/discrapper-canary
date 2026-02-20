"use strict";
n.d(t, { Bp: () => A, EX: () => h, TF: () => p });
var i = n(64700),
    s = n(311907),
    l = n(71393),
    r = n(576705),
    a = n(363487),
    o = n(665171),
    c = n(488803),
    d = n(522055);
function u(e, t, n) {
    let i = !0 === (0, a.G)(t, e),
        s = (0, c.TS)(e.id, n);
    return i && s;
}
function h(e) {
    return (0, s.yK)([l.A, r.A], () => l.A.getGuildsArray().filter((t) => u(t, r.A, e)));
}
function A(e) {
    return (0, s.bG)([l.A, r.A], () => l.A.getGuildsArray().some((t) => u(t, r.A, e)));
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldFetch: n = !1 } = t,
        l = (0, s.bG)([d.A], () => {
            if (null == e) return !1;
            let { catalog: t } = d.A.getGlobalCatalogState();
            return Object.values(t).some((t) => t.gameId === e);
        }, [e]),
        r = (0, s.bG)([d.A], () => d.A.shouldFetchGlobalCatalog());
    return (
        i.useEffect(() => {
            null != e && n && r && (0, o.K)();
        }, [e, n, r]),
        l
    );
}
