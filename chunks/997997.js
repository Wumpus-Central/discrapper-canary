n.d(e, {
    C: () => u,
    K: () => o,
});
var l,
    r = n(954571),
    i = n(652215),
    u =
        (((l = {}).STORE_MODAL = "store_modal"),
        (l.DETAILS_MODAL = "details_modal"),
        (l.STORE_EMBED = "store_embed"),
        (l.SKU_EMBED = "sku_embed"),
        l);

function o(t, e, n) {
    r.default.track(i.HAw.STOREFRONT_COPY_LINK_CLICKED, {
        application_id: t,
        area: e,
        sku_id: n,
    });
}
