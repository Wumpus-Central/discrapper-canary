n.d(t, { D: () => d });
var l = n(627968),
    a = n(64700),
    r = n(217905),
    s = n(688810),
    i = n(954571),
    o = n(652215);
function d(e) {
    let { appId: t, skuId: n, ...d } = e,
        { analyticsLocations: c } = (0, s.Ay)();
    return (
        a.useEffect(() => {
            i.default.track(o.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: t,
                sku_id: n,
                location_stack: c,
            });
        }, [c, t, n]),
        (0, l.jsx)(r.F, { ...d })
    );
}
