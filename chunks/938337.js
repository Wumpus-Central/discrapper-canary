t.d(n, { i: () => c });
var r = t(200651),
    l = t(192379),
    a = t(512100),
    o = t(906732),
    s = t(626135),
    i = t(981631);
function c(e) {
    var { appId: n, skuId: t } = e,
        c = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                l = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (t = a[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
            }
            return l;
        })(e, ['appId', 'skuId']);
    let { analyticsLocations: d } = (0, o.ZP)();
    return (
        l.useEffect(() => {
            s.default.track(i.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: d
            });
        }, [d, n, t]),
        (0, r.jsx)(
            a.u,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        r.forEach(function (n) {
                            var r;
                            (r = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = r);
                        });
                }
                return e;
            })({}, c)
        )
    );
}
