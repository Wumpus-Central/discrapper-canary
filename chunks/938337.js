l.d(e, {
    i: function () {
        return c;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(512100),
    o = l(906732),
    s = l(626135),
    a = l(981631);
function c(n) {
    let { appId: e, skuId: l, ...c } = n,
        { analyticsLocations: d } = (0, o.ZP)();
    return (
        i.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: e,
                sku_id: l,
                location_stack: d
            });
        }, [d, e, l]),
        (0, t.jsx)(r.u, { ...c })
    );
}
