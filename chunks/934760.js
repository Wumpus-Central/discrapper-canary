r.d(t, { Z: () => o });
var n = r(73800),
    l = r(557816),
    a = r.n(l),
    i = r(597688);
function o() {
    return (0, n.useCallback)(
        (e) =>
            a()(
                e
                    .map((e) => {
                        let t = i.Z.getProduct(e);
                        return null != t && null != t.variantGroupStoreListingId
                            ? i.Z.getProductByStoreListingId(t.variantGroupStoreListingId)
                            : t;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [],
    );
}
