"use strict";
r.d(t, { A: () => c });
var l = r(64700),
    s = r(17928),
    n = r(736056),
    a = r(409013),
    i = r(972441);
let c = (e, t) => {
    let r = (0, s.bG)([n.A], () => n.A.hasLoadedExperiments),
        [c, u, d] = (0, s.yK)([i.A], () => [i.A.getLayout(e, t), i.A.isFetchingLayout(e, t), i.A.getFetchError(e, t)]),
        o = null == c && null != t && r && !u && null == d;
    return (
        l.useEffect(() => {
            o && (0, a.v)({ tenantId: e, layoutId: t }).catch(() => {});
        }, [o, e, t]),
        { layout: c, loading: u, error: d }
    );
};
