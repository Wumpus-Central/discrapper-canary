"use strict";
n.d(t, { C: () => a, K: () => l });
var i,
    s = n(954571),
    r = n(652215),
    a =
        (((i = {}).STORE_MODAL = "store_modal"),
        (i.DETAILS_MODAL = "details_modal"),
        (i.STORE_EMBED = "store_embed"),
        (i.SKU_EMBED = "sku_embed"),
        i);
function l(e, t, n) {
    s.default.track(r.HAw.STOREFRONT_COPY_LINK_CLICKED, { application_id: e, area: t, sku_id: n });
}
