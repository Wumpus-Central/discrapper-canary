"use strict";
n.d(t, { Bp: () => f, EX: () => _, TF: () => h });
var i = n(64700),
    r = n(17928),
    s = n(71393),
    a = n(576705),
    o = n(363487),
    l = n(396748),
    u = n(488803),
    c = n(522055);
function d(e, t, n) {
    let i = !0 === (0, o.G)(t, e),
        r = (0, u.TS)(e.id, n);
    return i && r;
}
function _(e) {
    return (0, r.yK)([s.A, a.A], () => s.A.getGuildsArray().filter((t) => d(t, a.A, e)));
}
function f(e) {
    return (0, r.bG)([s.A, a.A], () => s.A.getGuildsArray().some((t) => d(t, a.A, e)));
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldFetch: n = !1 } = t,
        s = (0, r.bG)([c.A], () => {
            if (null == e) return !1;
            let { catalog: t } = c.A.getGlobalCatalogState();
            return Object.values(t).some((t) => t.gameId === e);
        }, [e]),
        a = (0, r.bG)([c.A], () => c.A.shouldFetchGlobalCatalog());
    return (
        i.useEffect(() => {
            null != e && n && a && (0, l.K)();
        }, [e, n, a]),
        s
    );
}
