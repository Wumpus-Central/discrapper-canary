n.d(t, { Z: () => s });
var r = n(473749),
    l = n(557816),
    i = n.n(l),
    o = n(597688);
function s() {
    return (0, r.useCallback)(
        (e) =>
            i()(
                e
                    .map((e) => {
                        let t = o.Z.getProduct(e);
                        return null != t && null != t.variantGroupStoreListingId
                            ? o.Z.getProductByStoreListingId(t.variantGroupStoreListingId)
                            : t;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [],
    );
}
