t.d(l, { A: () => c });
var r = t(64700),
    o = t(311907),
    i = t(49463),
    n = t(409013),
    a = t(972441);
let c = (e, l) => {
    let t = (0, o.bG)([i.A], () => i.A.hasLoadedExperiments),
        [c, d, s] = (0, o.yK)([a.A], () => [a.A.getLayout(e, l), a.A.isFetchingLayout(e, l), a.A.getFetchError(e, l)]),
        u = null == c && null != l && t && !d && null == s;
    return (
        r.useEffect(() => {
            u && (0, n.v)({ tenantId: e, layoutId: l }).catch(() => {});
        }, [u, e, l]),
        { layout: c, loading: d, error: s }
    );
};
