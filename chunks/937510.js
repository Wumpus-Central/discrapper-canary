n.d(t, {
    l: function () {
        return u;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    l = n(192379),
    a = n(952639),
    s = n.n(a),
    o = n(399606),
    c = n(1870),
    d = n(724994);
((i = r || (r = {}))[(i.NOT_PURCHASED = 0)] = 'NOT_PURCHASED'), (i[(i.PARTIAL_OWNED_VARIANTS_GROUP = 1)] = 'PARTIAL_OWNED_VARIANTS_GROUP'), (i[(i.PARTIAL_OWNED_BUNDLE = 2)] = 'PARTIAL_OWNED_BUNDLE'), (i[(i.PURCHASED = 3)] = 'PURCHASED');
let u = (e) => {
    let t = (0, o.e7)([c.Z], () => c.Z.purchases);
    return (0, l.useMemo)(() => {
        let t = [[], [], [], []];
        for (let n of e.values()) {
            let { isPurchased: e, isPartiallyOwnedBundle: r, isPartiallyOwnedVariantsGroup: i } = (0, d.U)(c.Z, n);
            t[r ? 2 : i ? 1 : e ? 3 : 0].push(n);
        }
        return s()(t);
    }, [t, e]);
};
