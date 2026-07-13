"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    a = n(662388),
    s = n(590180),
    l = n(4227),
    o = n(203632);
function d(e) {
    let t = (0, r.bG)([s.A, l.A], () => {
            if (null == e) return;
            let t = s.A.getProduct(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
            let n = l.A.getPurchase(e);
            if ((0, o.C3)(n?.items[0])) return n.items[0];
        }),
        n = null != e && null == t;
    return (
        i.useEffect(() => {
            n && (0, a.RE)(e);
        }, [n, e]),
        t
    );
}
