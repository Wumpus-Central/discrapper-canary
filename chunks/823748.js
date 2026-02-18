n.d(t, { Bp: () => u, TF: () => h });
var i = n(64700),
    l = n(311907),
    s = n(71393),
    a = n(576705),
    r = n(363487),
    o = n(665171),
    d = n(488803),
    c = n(522055);
function u(e) {
    return (0, l.bG)([s.A, a.A], () =>
        s.A.getGuildsArray().some((t) => {
            var n;
            let i, l;
            return (n = a.A), (i = !0 === (0, r.G)(n, t)), (l = (0, d.TS)(t.id, e)), i && l;
        }),
    );
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldFetch: n = !1 } = t,
        s = (0, l.bG)([c.A], () => {
            if (null == e) return !1;
            let { catalog: t } = c.A.getGlobalCatalogState();
            return Object.values(t).some((t) => t.gameId === e);
        }, [e]),
        a = (0, l.bG)([c.A], () => c.A.shouldFetchGlobalCatalog());
    return (
        i.useEffect(() => {
            null != e && n && a && (0, o.K)();
        }, [e, n, a]),
        s
    );
}
