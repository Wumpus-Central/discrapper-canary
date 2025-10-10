n.d(t, { Z: () => i });
var r = n(647438),
    l = n(557816),
    s = n.n(l),
    a = n(597688);
function i() {
    return (0, r.useCallback)(
        (e) =>
            s()(
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
