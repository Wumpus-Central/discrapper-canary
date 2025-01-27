n.d(t, {
    u: function () {
        return o;
    }
});
var r = n(192379),
    i = n(557816),
    l = n.n(i),
    a = n(597688),
    s = n(228624);
let o = () => {
    let e = (0, s.ed)('CollectiblesFeedShop');
    return (0, r.useCallback)(
        (t) =>
            l()(
                t
                    .map((t) => {
                        let n = a.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? a.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
