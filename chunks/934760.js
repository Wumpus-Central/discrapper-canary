n.d(t, { Z: () => o });
var r = n(473749),
    l = n(557816),
    i = n.n(l),
    a = n(597688);
function o() {
    return (0, r.useCallback)(
        (e) =>
            i()(
                e
                    .map((e) => {
                        let t = a.Z.getProduct(e);
                        return null != t && null != t.variantGroupStoreListingId
                            ? a.Z.getProductByStoreListingId(t.variantGroupStoreListingId)
                            : t;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [],
    );
}
