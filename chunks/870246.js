n.d(t, {
    $: () => c,
    w: () => s
});
var r,
    o = n(192379),
    a = n(626135),
    i = n(981631),
    s = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function c(e, t, n) {
    o.useEffect(() => {
        a.default.track(i.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
