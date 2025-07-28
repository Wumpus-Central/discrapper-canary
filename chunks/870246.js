n.d(t, {
    $: () => i,
    w: () => s
});
var r,
    a = n(73800),
    o = n(626135),
    l = n(981631),
    s = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function i(e, t, n) {
    a.useEffect(() => {
        o.default.track(l.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
