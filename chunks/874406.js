e.d(n, { default: () => a });
var r = e(255367);
e(73800);
var i = e(481060),
    o = e(194359),
    c = e(468026),
    l = e(388032);
let a = (t) =>
    (0, r.jsx)(
        c.default,
        (function (t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(e);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(e).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = e[n]),
                            n in t
                                ? Object.defineProperty(t, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[n] = r);
                    });
            }
            return t;
        })(
            {
                confirmText: l.intl.string(l.t['cY+Ooa']),
                title: l.intl.string(l.t.z2pFjo),
                cancelText: l.intl.string(l.t['ETE/oK']),
                onConfirm: () => {
                    o.Z.clearPendingRelationships();
                },
                body: l.intl.formatToPlainString(l.t['0nTvEx'], { incomingRequestCount: t.incomingRequestCount }),
                confirmColor: i.Ttl.RED
            },
            t
        )
    );
