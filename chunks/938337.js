n.d(e, { i: () => c });
var i = n(200651),
    s = n(192379),
    t = n(512100),
    r = n(906732),
    a = n(626135),
    o = n(981631);
function c(l) {
    let { appId: e, skuId: n, ...c } = l,
        { analyticsLocations: d } = (0, r.ZP)();
    return (
        s.useEffect(() => {
            a.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: e,
                sku_id: n,
                location_stack: d
            });
        }, [d, e, n]),
        (0, i.jsx)(t.u, { ...c })
    );
}
