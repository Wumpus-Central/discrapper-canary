"use strict";
r.d(t, { A: () => c });
var n = r(64700),
    i = r(17928),
    a = r(693477),
    s = r(590180),
    l = r(4227),
    o = r(203632);
function c(e) {
    let t = (0, i.bG)([s.A, l.A], () => {
            if (null == e) return;
            let t = s.A.getProduct(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
            let r = l.A.getPurchase(e);
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
