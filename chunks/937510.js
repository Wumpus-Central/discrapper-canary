n.d(t, { l: () => c }), n(388685), n(539854);
var r = n(73800),
    l = n(952639),
    a = n.n(l),
    i = n(399606),
    o = n(1870),
    s = n(724994);
let c = (e) => {
    let t = (0, i.e7)([o.Z], () => o.Z.purchases);
    return (0, r.useMemo)(() => {
        let t = [[], [], [], []];
        for (let n of e.values()) {
            let { isPurchased: e, isPartiallyOwnedBundle: r, isPartiallyOwnedVariantsGroup: l } = (0, s.U)(o.Z, n);
            t[r ? 2 : l ? 1 : 3 * !!e].push(n);
        }
        return a()(t);
    }, [t, e]);
};
