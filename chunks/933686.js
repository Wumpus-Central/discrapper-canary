n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(774078),
    a = n(906732),
    s = n(390322),
    c = n(272929),
    u = n(456631),
    d = n(381871),
    p = n(522651),
    h = n(304388);
function f(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, a.ZP)(),
        f = (0, l.e7)([u.Z], () => u.Z.effectCooldownEndTime),
        m = i.useMemo(() => (null != f ? (f.getTime() - Date.now()) / 1000 : 0), [f]),
        { seconds: g } = (0, o.Z)(null != f ? f : new Date()),
        b = g > 0;
    return (0, r.jsx)(h.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: i } = e;
            return (0, r.jsx)(s.Z, {
                children: (0, r.jsx)(d.Z, {
                    channel: t,
                    closePopout: n,
                    onFocus: i
                })
            });
        },
        children: (e) => {
            var { onMouseEnter: t, onClick: i } = e,
                l = (function (e, t) {
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
                })(e, ['onMouseEnter', 'onClick']);
            return (0, r.jsx)(
                c.Z,
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
                        totalCooldownSeconds: m,
                        remainingCooldownSeconds: g,
                        onMouseEnter: (e) => {
                            !b && t(e);
                        },
                        onClick: (e) => {
                            (0, p.v)(n, p.d.EMOJI), i(e);
                        }
                    },
                    l
                )
            );
        }
    });
}
