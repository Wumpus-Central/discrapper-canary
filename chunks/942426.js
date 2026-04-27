"use strict";
r.d(t, { A: () => c });
var n = r(64700),
    i = r(17928),
    a = r(693477),
    l = r(590180),
    s = r(4227),
    o = r(203632);
function c(e) {
    let t = (0, i.bG)([l.A, s.A], () => {
            if (null == e) return;
            let t = l.A.getProduct(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
            let r = s.A.getPurchase(e);
            if ((0, o.C3)(r?.items[0])) return r.items[0];
        }),
        r = null != e && null == t;
    return (
        n.useEffect(() => {
            r && (0, a.RE)(e);
        }, [r, e]),
        t
    );
}
