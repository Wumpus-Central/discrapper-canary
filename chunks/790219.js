n.d(t, { A: () => c });
var r = n(64700),
    l = n(17928),
    a = n(736056),
    s = n(851245),
    i = n(671281);
let c = function (e, t) {
    let n = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments),
        [c, o, u] = (0, l.yK)([i.A], () => [i.A.getLayout(e, t), i.A.isFetchingLayout(e, t), i.A.getFetchError(e, t)]),
        d = null == c && null != t && n && !o && null == u;
    return (
        r.useEffect(() => {
            d && (0, s.v)({ tenantId: e, layoutId: t }).catch(() => {});
        }, [d, e, t]),
        { layout: c, loading: o, error: u }
    );
};
