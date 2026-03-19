n.d(t, { N: () => _ });
var i = n(627968);
n(64700);
var r = n(835245),
    a = n(397927),
    l = n(391048),
    s = n(636099),
    o = n(608805),
    d = n(120700),
    c = n(954571),
    u = n(652215);
function _(e) {
    let { guildProductListing: t, guildId: _, sourceAnalyticsLocations: m } = e,
        h = !1,
        p = (0, r.A)(),
        g = t.id,
        A = () => {
            h = !0;
        };
    (0, a.mMO)(
        async () => {
            let { default: e } = await n.e("41469").then(n.bind(n, 35052));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: g,
                    sourceAnalyticsLocations: m,
                    guildProductContext: { guildProductListingId: t.id, guildId: _ },
                    loadId: p,
                    onComplete: A,
                });
        },
        {
            onCloseCallback: () => {
                if (!h) {
                    let e = (0, o.q1)({
                        location: "GuildProductPurchaseModal",
                        unifiedCheckoutFlow: d.C.GUILD_PRODUCT_CHECKOUT,
                    });
                    c.default.track(u.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: p,
                        payment_type: u.frM[u.VVm.ONE_TIME],
                        is_gift: !1,
                        sku_id: g,
                        location_stack: Array.isArray(m) ? m : [m],
                        checkout_design: e ? o.rS.UNIFIED : o.rS.LEGACY,
                    });
                }
                (0, l.ET)(), (0, s.z)();
            },
            onCloseRequest: u.tEg,
        },
    );
}
