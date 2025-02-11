n.d(t, { u: () => o });
var l = n(192379),
    r = n(557816),
    i = n.n(r),
    s = n(597688),
    a = n(228624);
let o = () => {
    let e = (0, a.ed)('CollectiblesFeedShop');
    return (0, l.useCallback)(
        (t) =>
            i()(
                t
                    .map((t) => {
                        let n = s.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? s.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
