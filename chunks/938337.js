t.d(n, { i: () => c });
var l = t(200651),
    r = t(192379),
    a = t(512100),
    o = t(906732),
    i = t(626135),
    s = t(981631);
function c(e) {
    var { appId: n, skuId: t } = e,
        c = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        r = {},
                        a = Object.keys(e);
                    for (l = 0; l < a.length; l++) (t = a[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (l = 0; l < a.length; l++) (t = a[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['appId', 'skuId']);
    let { analyticsLocations: d } = (0, o.ZP)();
    return (
        r.useEffect(() => {
            i.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: d
            });
        }, [d, n, t]),
        (0, l.jsx)(
            a.u,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })({}, c)
        )
    );
}
