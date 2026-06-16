l.d(t, { A: () => c });
var r = l(64700),
    n = l(17928),
    a = l(736056),
    s = l(851245),
    i = l(671281);
let c = (e, t) => {
    let l = (0, n.bG)([a.A], () => a.A.hasLoadedExperiments),
        [c, d, o] = (0, n.yK)([i.A], () => [i.A.getLayout(e, t), i.A.isFetchingLayout(e, t), i.A.getFetchError(e, t)]),
        u = null == c && null != t && l && !d && null == o;
    return (
        r.useEffect(() => {
            u && (0, s.v)({ tenantId: e, layoutId: t }).catch(() => {});
        }, [u, e, t]),
        { layout: c, loading: d, error: o }
    );
};
