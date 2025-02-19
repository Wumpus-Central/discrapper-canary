n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(774078),
    a = n(390322),
    s = n(272929),
    c = n(456631),
    u = n(381871),
    d = n(304388);
function p(e) {
    let { channel: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.effectCooldownEndTime),
        p = i.useMemo(() => (null != n ? (n.getTime() - Date.now()) / 1000 : 0), [n]),
        { seconds: h } = (0, o.Z)(null != n ? n : new Date()),
        f = h > 0;
    return (0, r.jsx)(d.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: i } = e;
            return (0, r.jsx)(a.Z, {
                children: (0, r.jsx)(u.Z, {
                    channel: t,
                    closePopout: n,
                    onFocus: i
                })
            });
        },
        children: (e) => {
            var { onMouseEnter: t } = e,
                n = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(e, ['onMouseEnter']);
            return (0, r.jsx)(
                s.Z,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        totalCooldownSeconds: p,
                        remainingCooldownSeconds: h,
                        onMouseEnter: (e) => {
                            f || t(e);
                        }
                    },
                    n
                )
            );
        }
    });
}
