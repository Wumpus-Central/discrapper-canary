t.d(r, { A: () => n });
var d = t(64700),
    l = t(311907),
    c = t(49463),
    o = t(409013),
    a = t(972441);
let n = (e, r, t) => {
    let n = (0, l.bG)([c.A], () => c.A.hasLoadedExperiments),
        [s, u, i] = (0, l.yK)([a.A], () => [a.A.getLayout(e), a.A.isFetchingLayout(e), a.A.getFetchError(e)]);
    return (
        d.useEffect(() => {
            null == s &&
                null != e &&
                n &&
                !u &&
                null == i &&
                (0, o.v)({ tenantId: r, layoutId: e, requestParams: t }).catch(() => {});
        }, [s, e, r, t, u, n, i]),
        { layout: s, loading: u, error: i }
    );
};
