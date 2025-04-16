l.d(n, { i: () => c });
var t = l(200651),
    r = l(192379),
    s = l(512100),
    i = l(906732),
    a = l(626135),
    o = l(981631);
function c(e) {
    var { appId: n, skuId: l } = e,
        c = (function (e, n) {
            if (null == e) return {};
            var l,
                t,
                r = (function (e, n) {
                    if (null == e) return {};
                    var l,
                        t,
                        r = {},
                        s = Object.keys(e);
                    for (t = 0; t < s.length; t++) (l = s[t]), n.indexOf(l) >= 0 || (r[l] = e[l]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (t = 0; t < s.length; t++) (l = s[t]), !(n.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            }
            return r;
        })(e, ['appId', 'skuId']);
    let { analyticsLocations: d } = (0, i.ZP)();
    return (
        r.useEffect(() => {
            a.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: l,
                location_stack: d
            });
        }, [d, n, l]),
        (0, t.jsx)(
            s.u,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var l = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(l);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                            })
                        )),
                        t.forEach(function (n) {
                            var t;
                            (t = l[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: t,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = t);
                        });
                }
                return e;
            })({}, c)
        )
    );
}
