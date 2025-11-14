n.d(t, { Z: () => c }), n(539854), n(388685);
var i = n(647438),
    r = n(442837),
    l = n(321947),
    a = n(55563),
    o = n(417317),
    s = n(981631);
function c(e) {
    let { guildId: t } = e,
        n = (0, o.Z)({ guildId: t }),
        c = i.useMemo(() => {
            if (null == n || null == n.storefront || (null == n ? void 0 : n.loading)) return [];
            let e = [];
            for (let i of n.storefront.pages) {
                var t;
                if ((e.push(...i.skuIds), e.length >= 6)) break;
                for (let n of null != (t = i.sections) ? t : []) if ((e.push(...n.skuIds), e.length >= 6)) break;
            }
            return e.slice(0, 6);
        }, [n]),
        u = (0, r.Wu)([a.Z], () => c.map((e) => a.Z.get(e)).filter((e) => null != e), [c]),
        d = i.useMemo(
            () =>
                u.map(
                    (e) =>
                        new l.Z({
                            sku_id: e.id,
                            sku_product_line: s.POd.SOCIAL_LAYER_GAME_ITEM,
                            sku_name: e.name,
                            sku: e,
                        }),
                ),
            [u],
        );
    return {
        loading: null == n || (null == n ? void 0 : n.loading),
        wishlistItems: d,
    };
}
