n.d(t, { Z: () => x });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    s = n(481060),
    a = n(100527),
    c = n(522651),
    u = n(476221),
    d = n(873596),
    f = n(423516),
    h = n(981631),
    p = n(683560);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let O = {
        [h.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: p.rtcConnectionStatusError
    },
    N = {
        [h.IE4.FINE]: p.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
        [h.IE4.BAD]: p.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    },
    y = {
        [h.IE4.FINE]: s.B_b,
        [h.IE4.AVERAGE]: s.hLg,
        [h.IE4.BAD]: s.mbS,
        [h.IE4.UNKNOWN]: s._3e
    };
function b(e) {
    var { quality: t, largePing: n } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['quality', 'largePing']);
    let i = y[t];
    return (0, r.jsx)(i, g({ className: o()(p.ping, { [p.largePing]: n }) }, l));
}
function x(e) {
    let { quality: t, lastPing: n, state: i, className: y, children: x, channelId: E, childrenAsSubtitle: m, connectionStatusTextVariant: v, hasVideo: C } = e,
        I = l.useRef(null),
        T = i === h.hes.RTC_CONNECTED,
        j = l.useCallback(
            (e) => {
                var t, n;
                return (0, r.jsx)(
                    d.Z,
                    ((t = g({}, e)),
                    (n = n = { channelId: E }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            },
            [E]
        ),
        { connectionStatus: S, connectionStatusText: P } = u.Z.getStatus(i, C);
    return (0, r.jsxs)('div', {
        className: p.rtcConnectionStatusWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: o()(p.rtcConnectionStatus, N[t], y),
                children: [
                    T &&
                        (0, r.jsx)(s.ua7, {
                            text: t !== h.IE4.UNKNOWN && null != n ? ''.concat(n.toFixed(0), ' ms') : null,
                            children: (e) =>
                                (0, r.jsx)(
                                    b,
                                    g(
                                        {
                                            quality: t,
                                            largePing: m
                                        },
                                        e
                                    )
                                )
                        }),
                    (0, r.jsxs)('div', {
                        className: p.labelWrapper,
                        children: [
                            (0, r.jsx)(s.yRy, {
                                targetElementRef: I,
                                renderPopout: j,
                                position: 'top',
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(s.P3F, {
                                        innerRef: I,
                                        onClick: (e) => {
                                            ((0, c.v)(a.Z.RTC_PANEL, c.d.CONNECTION_STATUS), t(e));
                                        },
                                        children: (0, r.jsx)(f.Z, {
                                            text: P,
                                            textVariant: v,
                                            hasVideo: C,
                                            className: O[S],
                                            hasConnectedChannel: null != E
                                        })
                                    });
                                }
                            }),
                            m ? x : null
                        ]
                    })
                ]
            }),
            m ? null : x
        ]
    });
}
