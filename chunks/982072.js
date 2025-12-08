n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(907331),
    l = n(262937),
    a = n(931847);
function o(e) {
    let { widget: t, onAction: n } = e,
        [o, c] = (0, r.useState)(!1),
        s = t instanceof a.q ? t.applicationId : null,
        { fetched: u } = (0, l.o)(s),
        d = (0, r.useCallback)(
            (e) => {
                e &&
                    (n(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({ action: "VIEW_WIDGET" }, t.getProfileAnalyticsOptions()),
                    ),
                    c(!0));
            },
            [n, t],
        );
    return (0, i.O)(d, void 0, !o && (null == s || u));
}
