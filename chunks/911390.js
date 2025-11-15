n.d(t, { q: () => a });
var r = n(647438),
    l = n(442837),
    i = n(1870);
function a(e, t) {
    let n = r.useMemo(() => e.products.filter((e) => e.skuId !== t).map((e) => e.skuId), [e.products, t]),
        a = (0, l.e7)([i.Z], () => i.Z.getPurchases(n));
    return {
        readyToClaim: r.useMemo(() => a.length === n.length, [a, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: a,
    };
}
