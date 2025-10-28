n.d(t, { l: () => c }), n(388685), n(539854);
var r = n(647438),
    l = n(952639),
    i = n.n(l),
    o = n(399606),
    s = n(1870),
    a = n(724994);
let c = (e) => {
    let t = (0, o.e7)([s.Z], () => s.Z.purchases);
    return (0, r.useMemo)(() => {
        let t = [[], [], [], []];
        for (let n of e.values()) {
            let { isPurchased: e, isPartiallyOwnedBundle: r, isPartiallyOwnedVariantsGroup: l } = (0, a.U)(s.Z, n);
            t[r ? 2 : l ? 1 : 3 * !!e].push(n);
        }
        return i()(t);
    }, [t, e]);
};
