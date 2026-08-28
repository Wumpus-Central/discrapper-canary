n.d(t, { A: () => c });
var r = n(582128),
    l = n(17928),
    a = n(736056),
    i = n(851245),
    s = n(671281);
let c = function (e, t) {
    let n = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments),
        [c, o, u] = (0, l.yK)([s.A], () => [s.A.getLayout(e, t), s.A.isFetchingLayout(e, t), s.A.getFetchError(e, t)]),
        d = null == c && null != t && n && !o && null == u;
    return (
        r.useEffect(() => {
            d && (0, i.v)({ tenantId: e, layoutId: t }).catch(() => {});
        }, [d, e, t]),
        { layout: c, loading: o, error: u }
    );
};
