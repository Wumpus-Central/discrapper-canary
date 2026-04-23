l.d(t, { A: () => i });
var r = l(64700),
    n = l(311907),
    a = l(49463),
    s = l(409013),
    c = l(194822);
let i = (e, t) => {
    let l = (0, n.bG)([a.A], () => a.A.hasLoadedExperiments),
        [i, d, o] = (0, n.yK)([c.A], () => [c.A.getLayout(e, t), c.A.isFetchingLayout(e, t), c.A.getFetchError(e, t)]),
        u = null == i && null != t && l && !d && null == o;
    return (
        r.useEffect(() => {
            u && (0, s.v)({ tenantId: e, layoutId: t }).catch(() => {});
        }, [u, e, t]),
        { layout: i, loading: d, error: o }
    );
};
