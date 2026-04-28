"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    a = n(17928),
    i = n(693477),
    l = n(590180),
    s = n(4227),
    o = n(203632);
function c(e) {
    let t = (0, a.bG)([l.A, s.A], () => {
            if (null == e) return;
            let t = l.A.getProduct(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
            let n = s.A.getPurchase(e);
            if ((0, o.C3)(n?.items[0])) return n.items[0];
        }),
        n = null != e && null == t;
    return (
        r.useEffect(() => {
            n && (0, i.RE)(e);
        }, [n, e]),
        t
    );
}
