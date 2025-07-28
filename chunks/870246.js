n.d(t, {
    $: () => i,
    w: () => o
});
var r,
    l = n(73800),
    a = n(626135),
    s = n(981631),
    o = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function i(e, t, n) {
    l.useEffect(() => {
        a.default.track(s.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
