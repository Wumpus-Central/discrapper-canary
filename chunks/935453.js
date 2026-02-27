n.d(t, { N: () => u });
var i = n(627968);
n(64700);
var l = n(835245),
    r = n(397927),
    a = n(391048),
    s = n(636099),
    o = n(608805),
    d = n(954571),
    c = n(652215);
function u(e) {
    let { guildProductListing: t, guildId: u, sourceAnalyticsLocations: _ } = e,
        m = !1,
        h = (0, l.A)(),
        p = t.id,
        g = () => {
            m = !0;
        };
    (0, r.mMO)(
        async () => {
            let { default: e } = await n.e("41469").then(n.bind(n, 35052));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: p,
                    sourceAnalyticsLocations: _,
                    guildProductContext: { guildProductListingId: t.id, guildId: u },
                    loadId: h,
                    onComplete: g,
                });
        },
        {
            onCloseCallback: () => {
                if (!m) {
                    let e = (0, o.q1)({ location: "GuildProductPurchaseModal" });
                    d.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: h,
                        payment_type: c.frM[c.VVm.ONE_TIME],
                        is_gift: !1,
                        sku_id: p,
                        location_stack: Array.isArray(_) ? _ : [_],
                        checkout_design: e ? o.rS.UNIFIED : o.rS.LEGACY,
                    });
                }
                (0, a.ET)(), (0, s.z)();
            },
            onCloseRequest: c.tEg,
        },
    );
}
