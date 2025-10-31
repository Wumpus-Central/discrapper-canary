o.d(t, {
    $: () => i,
    w: () => s,
});
var n,
    r = o(647438),
    a = o(626135),
    c = o(981631),
    s = (((n = {}).DETAIL = "Boost Perk Shop Details"), (n.DEACTIVATE = "Boost Perk Shop Disable"), n);
function i(e, t, o) {
    r.useEffect(() => {
        a.default.track(c.rMx.OPEN_MODAL, {
            type: o,
            sku_id: t.skuId,
            guild_id: e,
        });
    }, [o, e, t.skuId]);
}
