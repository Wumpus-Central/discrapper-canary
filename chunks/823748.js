n.d(t, { Bp: () => A, EX: () => h, TF: () => _ });
var i = n(64700),
    l = n(17928),
    s = n(71393),
    r = n(576705),
    a = n(363487),
    o = n(665171),
    d = n(488803),
    c = n(522055);
function u(e, t, n) {
    let i = !0 === (0, a.G)(t, e),
        l = (0, d.TS)(e.id, n);
    return i && l;
}
function h(e) {
    return (0, l.yK)([s.A, r.A], () => s.A.getGuildsArray().filter((t) => u(t, r.A, e)));
}
function A(e) {
    return (0, l.bG)([s.A, r.A], () => s.A.getGuildsArray().some((t) => u(t, r.A, e)));
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldFetch: n = !1 } = t,
        s = (0, l.bG)([c.A], () => {
            if (null == e) return !1;
            let { catalog: t } = c.A.getGlobalCatalogState();
            return Object.values(t).some((t) => t.gameId === e);
        }, [e]),
        r = (0, l.bG)([c.A], () => c.A.shouldFetchGlobalCatalog());
    return (
        i.useEffect(() => {
            null != e && n && r && (0, o.K)();
        }, [e, n, r]),
        s
    );
}
