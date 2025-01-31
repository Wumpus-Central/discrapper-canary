e.d(t, { Z: () => d });
var l = e(200651);
e(192379);
var i = e(772848),
    a = e(481060),
    r = e(159351),
    s = e(667),
    u = e(626135),
    o = e(981631);
function d(n) {
    let { applicationId: t, skuId: d, onClose: c, onComplete: p, analyticsLocations: f, analyticsLocationObject: v, contextKey: m } = n,
        I = !1,
        h = (0, i.Z)();
    (0, a.ZDy)(
        async () => {
            let { default: n } = await e.e('61670').then(e.bind(e, 409600));
            return (e) => {
                let { onClose: i, ...a } = e;
                return (0, l.jsx)(n, {
                    ...a,
                    loadId: h,
                    applicationId: t,
                    skuId: d,
                    analyticsLocations: f,
                    analyticsLocationObject: v,
                    onClose: (n) => {
                        i(), null == c || c(n);
                    },
                    onComplete: (n) => {
                        (I = !0), null == p || p(n);
                    }
                });
            };
        },
        {
            contextKey: m,
            onCloseCallback: () => {
                I ||
                    u.default.track(o.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: h,
                        payment_type: o.Zuq[o.GZQ.ONE_TIME],
                        location: v,
                        is_gift: !1,
                        sku_id: d,
                        application_id: t,
                        location_stack: f
                    }),
                    (0, r.fw)(),
                    (0, s.p)(),
                    null == c || c(I);
            },
            onCloseRequest: o.dG4
        }
    );
}
