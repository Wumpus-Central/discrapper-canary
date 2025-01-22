e.d(t, {
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var l = e(772848),
    r = e(481060),
    u = e(159351),
    a = e(667),
    o = e(626135),
    s = e(981631);
function c(n) {
    let { applicationId: t, skuId: c, onClose: d, onComplete: f, analyticsLocations: p, analyticsLocationObject: m, contextKey: v } = n,
        I = !1,
        S = (0, l.Z)();
    (0, r.openModalLazy)(
        async () => {
            let { default: n } = await e.e('61670').then(e.bind(e, 409600));
            return (e) => {
                let { onClose: l, ...r } = e;
                return (0, i.jsx)(n, {
                    ...r,
                    loadId: S,
                    applicationId: t,
                    skuId: c,
                    analyticsLocations: p,
                    analyticsLocationObject: m,
                    onClose: (n) => {
                        l(), null == d || d(n);
                    },
                    onComplete: (n) => {
                        (I = !0), null == f || f(n);
                    }
                });
            };
        },
        {
            contextKey: v,
            onCloseCallback: () => {
                !I &&
                    o.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: S,
                        payment_type: s.Zuq[s.GZQ.ONE_TIME],
                        location: m,
                        is_gift: !1,
                        sku_id: c,
                        application_id: t,
                        location_stack: p
                    }),
                    (0, u.fw)(),
                    (0, a.p)(),
                    null == d || d(I);
            },
            onCloseRequest: s.dG4
        }
    );
}
