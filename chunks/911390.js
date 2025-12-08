n.d(t, { q: () => s });
var r = n(473749),
    l = n(442837),
    i = n(1870);
function s(e, t) {
    let n = r.useMemo(() => {
            var n;
            return null != (n = null == e ? void 0 : e.products.filter((e) => e.skuId !== t).map((e) => e.skuId))
                ? n
                : [];
        }, [null == e ? void 0 : e.products, t]),
        s = (0, l.e7)([i.Z], () => i.Z.getPurchases(n));
    return {
        readyToClaim: r.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
