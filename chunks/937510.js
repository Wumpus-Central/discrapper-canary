(r.d(t, { l: () => c }), r(388685), r(539854));
var n = r(73800),
    l = r(952639),
    o = r.n(l),
    i = r(399606),
    a = r(1870),
    s = r(724994);
let c = (e) => {
    let t = (0, i.e7)([a.Z], () => a.Z.purchases);
    return (0, n.useMemo)(() => {
        let t = [[], [], [], []];
        for (let r of e.values()) {
            let { isPurchased: e, isPartiallyOwnedBundle: n, isPartiallyOwnedVariantsGroup: l } = (0, s.U)(a.Z, r);
            t[n ? 2 : l ? 1 : 3 * !!e].push(r);
        }
        return o()(t);
    }, [t, e]);
};
