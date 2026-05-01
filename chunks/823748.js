n.d(t, { Bp: () => u, EX: () => E, TF: () => A });
var i = n(64700),
    a = n(17928),
    r = n(71393),
    s = n(576705),
    l = n(363487),
    o = n(665171),
    d = n(488803),
    c = n(522055);
function _(e, t, n) {
    let i = !0 === (0, l.G)(t, e),
        a = (0, d.TS)(e.id, n);
    return i && a;
}
function E(e) {
    return (0, a.yK)([r.A, s.A], () => r.A.getGuildsArray().filter((t) => _(t, s.A, e)));
}
function u(e) {
    return (0, a.bG)([r.A, s.A], () => r.A.getGuildsArray().some((t) => _(t, s.A, e)));
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldFetch: n = !1 } = t,
        r = (0, a.bG)([c.A], () => {
            if (null == e) return !1;
            let { catalog: t } = c.A.getGlobalCatalogState();
            return Object.values(t).some((t) => t.gameId === e);
        }, [e]),
        s = (0, a.bG)([c.A], () => c.A.shouldFetchGlobalCatalog());
    return (
        i.useEffect(() => {
            null != e && n && s && (0, o.K)();
        }, [e, n, s]),
        r
    );
}
