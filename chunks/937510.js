n.d(t, { l: () => d }), n(47120), n(653041);
var l = n(192379),
    r = n(952639),
    i = n.n(r),
    a = n(399606),
    s = n(1870),
    o = n(724994);
let d = (e) => {
    let t = (0, a.e7)([s.Z], () => s.Z.purchases);
    return (0, l.useMemo)(() => {
        let t = [[], [], [], []];
        for (let n of e.values()) {
            let { isPurchased: e, isPartiallyOwnedBundle: l, isPartiallyOwnedVariantsGroup: r } = (0, o.U)(s.Z, n);
            t[l ? 2 : r ? 1 : e ? 3 : 0].push(n);
        }
        return i()(t);
    }, [t, e]);
};
