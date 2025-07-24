n.d(t, {
    $: () => l,
    w: () => i
});
var r,
    o = n(73800),
    a = n(626135),
    s = n(981631),
    i = (((r = {}).DETAIL = 'Boost Perk Shop Details'), (r.DEACTIVATE = 'Boost Perk Shop Disable'), r);
function l(e, t, n) {
    o.useEffect(() => {
        a.default.track(s.rMx.OPEN_MODAL, {
            type: n,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [n, e, t.skuId]);
}
