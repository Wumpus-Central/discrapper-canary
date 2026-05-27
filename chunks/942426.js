t.d(r, { A: () => i });
var n = t(64700),
    u = t(17928),
    c = t(859040),
    s = t(590180),
    l = t(4227),
    a = t(203632);
function i(e) {
    let r = (0, u.bG)([s.A, l.A], () => {
            if (null == e) return;
            let r = s.A.getProduct(e);
            if ((0, a.C3)(r?.items[0])) return r.items[0];
            let t = l.A.getPurchase(e);
            if ((0, a.C3)(t?.items[0])) return t.items[0];
        }),
        t = null != e && null == r;
    return (
        n.useEffect(() => {
            t && (0, c.RE)(e);
        }, [t, e]),
        r
    );
}
