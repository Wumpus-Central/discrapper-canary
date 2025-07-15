n.d(t, {
    $: () => s,
    w: () => a
});
var r,
    o = n(73800),
    i = n(626135),
    l = n(981631),
    a = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function s(e, t, n) {
    o.useEffect(() => {
        i.default.track(l.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
