n.d(t, {
    $: () => i,
    w: () => a
});
var r,
    s = n(73800),
    o = n(626135),
    l = n(981631),
    a = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function i(e, t, n) {
    s.useEffect(() => {
        o.default.track(l.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
