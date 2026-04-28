n.d(t, { A: () => s });
var r = n(64700),
    l = n(17928),
    i = n(693477),
    a = n(590180),
    u = n(4227),
    o = n(203632);
function s(e) {
    let t = (0, l.bG)([a.A, u.A], () => {
            if (null == e) return;
            let t = a.A.getProduct(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
            let n = u.A.getPurchase(e);
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
