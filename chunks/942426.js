n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    a = n(29292),
    s = n(590180),
    _ = n(4227),
    l = n(203632);
function o(e) {
    let t = (0, r.bG)([s.A, _.A], () => {
            if (null == e) return;
            let t = s.A.getProduct(e);
            if ((0, l.C3)(t?.items[0])) return t.items[0];
            let n = _.A.getPurchase(e);
            if ((0, l.C3)(n?.items[0])) return n.items[0];
        }),
        n = null != e && null == t;
    return (
        i.useEffect(() => {
            n && (0, a.RE)(e);
        }, [n, e]),
        t
    );
}
