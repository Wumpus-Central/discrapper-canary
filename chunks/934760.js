n.d(t, { Z: () => o });
var r = n(473749),
    l = n(557816),
    i = n.n(l),
    s = n(597688);
function o() {
    return (0, r.useCallback)(
        (e) =>
            i()(
                e
                    .map((e) => {
                        let t = s.Z.getProduct(e);
                        return null != t && null != t.variantGroupStoreListingId
                            ? s.Z.getProductByStoreListingId(t.variantGroupStoreListingId)
                            : t;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [],
    );
}
