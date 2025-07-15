n.d(t, {
    $: () => s,
    w: () => l
});
var r,
    o = n(73800),
    a = n(626135),
    i = n(981631),
    l = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function s(e, t, n) {
    o.useEffect(() => {
        a.default.track(i.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
