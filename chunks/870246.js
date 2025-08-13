n.d(t, {
    $: () => c,
    w: () => s,
});
var r,
    o = n(73800),
    i = n(626135),
    a = n(981631),
    s = (((r = {}).DETAIL = "Boost Perk Shop Details"), (r.DEACTIVATE = "Boost Perk Shop Disable"), r);
function c(e, t, n) {
    o.useEffect(() => {
        i.default.track(a.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e,
        });
    }, [n, e, t.skuId]);
}
