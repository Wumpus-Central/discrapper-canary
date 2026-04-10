"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    s = n(979286),
    a = n(590180),
    o = n(4227),
    l = n(203632);
function u(e) {
    let t = (0, i.bG)([a.A, o.A], () => {
            if (null == e) return;
            let t = a.A.getProduct(e);
            if ((0, l.C3)(t?.items[0])) return t.items[0];
            let n = o.A.getPurchase(e);
            if ((0, l.C3)(n?.items[0])) return n.items[0];
        }),
        n = null != e && null == t;
    return (
        r.useEffect(() => {
            n && (0, s.RE)(e);
        }, [n, e]),
        t
    );
}
