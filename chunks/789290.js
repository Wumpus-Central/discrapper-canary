n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(64700),
    l = n(172218),
    i = n(521741),
    a = n(633075);

function s(e) {
    let { widget: t, onAction: n } = e,
        [s, o] = (0, r.useState)(!1),
        c = t instanceof a.R ? t.applicationId : null,
        { fetched: u } = (0, i.U)(c),
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
                        })(
                            {
                                action: "VIEW_WIDGET",
                            },
                            t.getProfileAnalyticsOptions(),
                        ),
                    ),
                    o(!0));
            },
            [n, t],
        );
    return (0, l.K)(d, void 0, !s && (null == c || u));
}
