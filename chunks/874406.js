n.d(e, { default: () => u });
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(194359),
    c = n(468026),
    a = n(388032);
let u = (t) =>
    (0, r.jsx)(
        c.default,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })(
            {
                confirmText: a.NW.string(a.t['cY+Ooa']),
                title: a.NW.string(a.t.z2pFjo),
                cancelText: a.NW.string(a.t['ETE/oK']),
                onConfirm: () => {
                    i.Z.clearPendingRelationships();
                },
                body: a.NW.formatToPlainString(a.t['0nTvEx'], { incomingRequestCount: t.incomingRequestCount }),
                confirmColor: o.Ttl.RED
            },
            t
        )
    );
