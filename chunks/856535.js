"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    a = n(49463),
    s = n(409013),
    o = n(972441);
let l = (e, t) => {
    let n = (0, i.bG)([a.A], () => a.A.hasLoadedExperiments),
        [l, u, c] = (0, i.yK)([o.A], () => [o.A.getLayout(e), o.A.isFetchingLayout(e), o.A.getFetchError(e)]);
    return (
        r.useEffect(() => {
            null == l && null != e && n && !u && null == c && (0, s.v)({ tenantId: t, layoutId: e }).catch(() => {});
        }, [l, e, t, u, n, c]),
        { layout: l, loading: u, error: c }
    );
};
