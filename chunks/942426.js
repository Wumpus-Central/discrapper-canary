t.d(r, { A: () => c });
var n = t(64700),
    l = t(17928),
    a = t(662388),
    u = t(590180),
    s = t(4227),
    o = t(203632);
function c(e) {
    let r = (0, l.bG)([u.A, s.A], () => {
            if (null == e) return;
            let r = u.A.getProduct(e);
            if ((0, o.C3)(r?.items[0])) return r.items[0];
            let t = s.A.getPurchase(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
        }),
        t = null != e && null == r;
    return (
        n.useEffect(() => {
            t && (0, a.RE)(e);
        }, [t, e]),
        r
    );
}
