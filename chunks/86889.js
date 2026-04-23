n.d(t, { D: () => d });
var a = n(627968),
    l = n(64700),
    r = n(217905),
    i = n(688810),
    s = n(954571),
    o = n(652215);
function d(e) {
    let { appId: t, skuId: n, ...d } = e,
        { analyticsLocations: c } = (0, i.Ay)();
    return (
        l.useEffect(() => {
            s.default.track(o.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: t,
                sku_id: n,
                location_stack: c,
            });
        }, [c, t, n]),
        (0, a.jsx)(r.F, { ...d })
    );
}
