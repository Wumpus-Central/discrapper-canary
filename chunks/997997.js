var s,
    r = n(129230),
    a = n(652215),
    t =
        (((s = {}).STORE_MODAL = "store_modal"),
        (s.DETAILS_MODAL = "details_modal"),
        (s.STORE_EMBED = "store_embed"),
        (s.SKU_EMBED = "sku_embed"),
        s);
n.d(
    e,
    {},
    {
        C: t,
        K: function (l, e, n) {
            r.default.track(a.HAw.STOREFRONT_COPY_LINK_CLICKED, { application_id: l, area: e, sku_id: n });
        },
    },
);
