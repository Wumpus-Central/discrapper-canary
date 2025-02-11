n.d(t, { l: () => d }), n(47120), n(653041);
var r = n(192379),
    l = n(952639),
    a = n.n(l),
    i = n(399606),
    s = n(1870),
    o = n(724994);
let d = (e) => {
    let t = (0, i.e7)([s.Z], () => s.Z.purchases);
    return (0, r.useMemo)(() => {
        let t = [[], [], [], []];
        for (let n of e.values()) {
            let { isPurchased: e, isPartiallyOwnedBundle: r, isPartiallyOwnedVariantsGroup: l } = (0, o.U)(s.Z, n);
            t[r ? 2 : l ? 1 : e ? 3 : 0].push(n);
        }
        return a()(t);
    }, [t, e]);
};
