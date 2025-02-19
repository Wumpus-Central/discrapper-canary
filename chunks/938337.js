t.d(r, { i: () => c });
var n = t(200651),
    l = t(192379),
    s = t(512100),
    o = t(906732),
    a = t(626135),
    i = t(981631);
function c(e) {
    var { appId: r, skuId: t } = e,
        c = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                l = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        l = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (t = s[n]), r.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (t = s[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
            }
            return l;
        })(e, ['appId', 'skuId']);
    let { analyticsLocations: d } = (0, o.ZP)();
    return (
        l.useEffect(() => {
            a.default.track(i.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: r,
                sku_id: t,
                location_stack: d
            });
        }, [d, r, t]),
        (0, n.jsx)(
            s.u,
            (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        n.forEach(function (r) {
                            var n;
                            (n = t[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[r] = n);
                        });
                }
                return e;
            })({}, c)
        )
    );
}
