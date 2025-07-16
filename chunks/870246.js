r.d(t, {
    $: () => l,
    w: () => s
});
var n,
    o = r(73800),
    a = r(626135),
    i = r(981631),
    s = (((n = {}).DETAIL = 'Boost Perk Shop Details'), (n.DEACTIVATE = 'Boost Perk Shop Disable'), n);
function l(e, t, r) {
    o.useEffect(() => {
        a.default.track(i.rMx.OPEN_MODAL, {
            type: r,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [r, e, t.skuId]);
}
