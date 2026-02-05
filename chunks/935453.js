n.d(t, { N: () => c });
var i = n(627968);
n(64700);
var l = n(835245),
    a = n(397927),
    r = n(391048),
    s = n(636099),
    o = n(954571),
    d = n(652215);
function c(e) {
    let { guildProductListing: t, guildId: c, sourceAnalyticsLocations: u } = e,
        m = !1,
        _ = (0, l.A)(),
        h = t.id,
        p = () => {
            m = !0;
        };
    (0, a.mMO)(
        async () => {
            let { default: e } = await n.e("41469").then(n.bind(n, 35052));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: h,
                    sourceAnalyticsLocations: u,
                    guildProductContext: { guildProductListingId: t.id, guildId: c },
                    loadId: _,
                    onComplete: p,
                });
        },
        {
            onCloseCallback: () => {
                m ||
                    o.default.track(d.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: _,
                        payment_type: d.frM[d.VVm.ONE_TIME],
                        is_gift: !1,
                        sku_id: h,
                        location_stack: Array.isArray(u) ? u : [u],
                    }),
                    (0, r.ET)(),
                    (0, s.z)();
            },
            onCloseRequest: d.tEg,
        },
    );
}
