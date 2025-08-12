n.d(t, {
    $: () => i,
    w: () => s,
});
var r,
    o = n(73800),
    l = n(626135),
    a = n(981631),
    s = (((r = {}).DETAIL = "Boost Perk Shop Details"), (r.DEACTIVATE = "Boost Perk Shop Disable"), r);
function i(e, t, n) {
    o.useEffect(() => {
        l.default.track(a.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e,
        });
    }, [n, e, t.skuId]);
}
