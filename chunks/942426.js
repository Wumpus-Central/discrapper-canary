a.d(t, { A: () => c });
var r = a(64700),
    n = a(17928),
    l = a(693477),
    i = a(590180),
    s = a(4227),
    o = a(203632);
function c(e) {
    let t = (0, n.bG)([i.A, s.A], () => {
            if (null == e) return;
            let t = i.A.getProduct(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
            let a = s.A.getPurchase(e);
            if ((0, o.C3)(a?.items[0])) return a.items[0];
        }),
        a = null != e && null == t;
    return (
        r.useEffect(() => {
            a && (0, l.RE)(e);
        }, [a, e]),
        t
    );
}
