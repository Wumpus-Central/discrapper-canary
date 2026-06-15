r.d(t, { A: () => u });
var n = r(64700),
    l = r(17928),
    a = r(859040),
    s = r(590180),
    i = r(4227),
    o = r(203632);
function u(e) {
    let t = (0, l.bG)([s.A, i.A], () => {
            if (null == e) return;
            let t = s.A.getProduct(e);
            if ((0, o.C3)(t?.items[0])) return t.items[0];
            let r = i.A.getPurchase(e);
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
