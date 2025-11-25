n.d(t, {
    W: () => c,
    Z: () => u,
}),
    n(361932),
    n(187205),
    n(388685),
    n(539854);
var i = n(473749),
    r = n(442837),
    l = n(321947),
    a = n(55563),
    o = n(417317),
    s = n(981631);
let c = 6;
function u(e) {
    let { guildId: t, numWishlistItems: n = c } = e,
        u = (0, o.Z)({
            guildId: t,
            location: "Wishlist Items for Social Layer Storefront",
        }),
        d = i.useMemo(() => {
            if (null == u || null == u.storefront || "loading" === u.state || "partially-fetched" === u.state)
                return [];
            let e = u.storefront.pages.flatMap((e) => {
                    var t, n;
                    return [
                        ...e.skuIds,
                        ...(null != (n = null == (t = e.sections) ? void 0 : t.flatMap((e) => e.skuIds)) ? n : []),
                    ];
                }),
                t = [],
                i = new Set();
            for (let r of e) if (!i.has(r) && (t.push(r), i.add(r), t.length >= n)) break;
            return t;
        }, [u, n]),
        p = (0, r.Wu)([a.Z], () => d.map((e) => a.Z.get(e)).filter((e) => null != e), [d]),
        h = i.useMemo(
            () =>
                p.map(
                    (e) =>
                        new l.Z({
                            sku_id: e.id,
                            sku_product_line: s.POd.SOCIAL_LAYER_GAME_ITEM,
                            sku_name: e.name,
                            sku: e,
                        }),
                ),
            [p],
        );
    return {
        loading: (null == u ? void 0 : u.state) === "loading",
        wishlistItems: h,
        wishlistItemSkuIds: d,
    };
}
