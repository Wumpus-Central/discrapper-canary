n.d(t, { Z: () => i });
var r = n(647438),
    l = n(557816),
    a = n.n(l),
    s = n(597688);
function i() {
    return (0, r.useCallback)(
        (e) =>
            a()(
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
