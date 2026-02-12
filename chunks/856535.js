"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    a = n(49463),
    s = n(409013),
    o = n(972441);
let l = (e, t, n) => {
    let l = (0, i.bG)([a.A], () => a.A.hasLoadedExperiments),
        [u, c, d] = (0, i.yK)([o.A], () => [o.A.getLayout(e), o.A.isFetchingLayout(e), o.A.getFetchError(e)]);
    return (
        r.useEffect(() => {
            null == u &&
                null != e &&
                l &&
                !c &&
                null == d &&
                (0, s.v)({ tenantId: t, layoutId: e, requestParams: n }).catch(() => {});
        }, [u, e, t, n, c, l, d]),
        { layout: u, loading: c, error: d }
    );
};
