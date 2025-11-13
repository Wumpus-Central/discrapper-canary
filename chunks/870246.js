n.d(t, {
    $: () => i,
    w: () => l,
});
var r,
    a = n(647438),
    s = n(626135),
    o = n(981631),
    l = (((r = {}).DETAIL = "Boost Perk Shop Details"), (r.DEACTIVATE = "Boost Perk Shop Disable"), r);
function i(e, t, n) {
    a.useEffect(() => {
        s.default.track(o.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e,
        });
    }, [n, e, t.skuId]);
}
