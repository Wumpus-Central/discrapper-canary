n.d(t, { q: () => o });
var r = n(473749),
    l = n(442837),
    i = n(1870);
function o(e, t) {
    let n = r.useMemo(() => {
            var n;
            return null != (n = null == e ? void 0 : e.products.filter((e) => e.skuId !== t).map((e) => e.skuId))
                ? n
                : [];
        }, [null == e ? void 0 : e.products, t]),
        o = (0, l.e7)([i.Z], () => i.Z.getPurchases(n));
    return {
        readyToClaim: r.useMemo(() => o.length === n.length, [o, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: o,
    };
}
