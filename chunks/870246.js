n.d(t, {
    $: () => i,
    w: () => l,
});
var r,
    o = n(647438),
    a = n(626135),
    s = n(981631),
    l = (((r = {}).DETAIL = "Boost Perk Shop Details"), (r.DEACTIVATE = "Boost Perk Shop Disable"), r);
function i(e, t, n) {
    o.useEffect(() => {
        a.default.track(s.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e,
        });
    }, [n, e, t.skuId]);
}
