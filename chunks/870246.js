n.d(t, {
    $: () => i,
    w: () => a
});
var r,
    o = n(73800),
    l = n(626135),
    s = n(981631),
    a = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function i(e, t, n) {
    o.useEffect(() => {
        l.default.track(s.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
