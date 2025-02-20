r.d(t, { u: () => s });
var n = r(192379),
    l = r(557816),
    i = r.n(l),
    a = r(597688),
    o = r(228624);
let s = () => {
    let e = (0, o.ed)('CollectiblesFeedShop');
    return (0, n.useCallback)(
        (t) =>
            i()(
                t
                    .map((t) => {
                        let r = a.Z.getProduct(t);
                        return e && null != r && null != r.variantGroupStoreListingId ? a.Z.getProductByStoreListingId(r.variantGroupStoreListingId) : r;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
