n.d(t, { N: () => m });
var i = n(627968);
n(64700);
var l = n(835245),
    a = n(192308),
    s = n(391048),
    r = n(636099),
    o = n(120700),
    d = n(742810),
    c = n(954571),
    u = n(652215);
function m(e) {
    let { guildProductListing: t, guildId: m, sourceAnalyticsLocations: _ } = e,
        h = !1,
        p = (0, l.A)(),
        g = t.id,
        A = () => {
            h = !0;
        };
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await n.e("41469").then(n.bind(n, 35052));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: g,
                    sourceAnalyticsLocations: _,
                    guildProductContext: { guildProductListingId: t.id, guildId: m },
                    loadId: p,
                    onComplete: A,
                });
        },
        {
            onCloseCallback: () => {
                if (!h) {
                    let e = (0, d.q1)({
                        location: "GuildProductPurchaseModal",
                        unifiedCheckoutFlow: o.C.GUILD_PRODUCT_CHECKOUT,
                    });
                    c.default.track(u.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: p,
                        payment_type: u.frM[u.VVm.ONE_TIME],
                        is_gift: !1,
                        sku_id: g,
                        location_stack: Array.isArray(_) ? _ : [_],
                        checkout_design: e ? d.rS.UNIFIED : d.rS.LEGACY,
                        checkout_flow: o.C.GUILD_PRODUCT_CHECKOUT,
                    });
                }
                (0, s.ET)(), (0, r.z)();
            },
            onCloseRequest: u.tEg,
        },
    );
}
