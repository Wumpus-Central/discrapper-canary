n.d(t, { Z: () => b });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(100527),
    c = n(522651),
    u = n(476221),
    d = n(873596),
    h = n(423516),
    f = n(981631),
    g = n(683560);
function p(e) {
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
let N = {
        [f.QKv.CONNECTED]: g.rtcConnectionStatusConnected,
        [f.QKv.CONNECTING]: g.rtcConnectionStatusConnecting,
        [f.QKv.ERROR]: g.rtcConnectionStatusError
    },
    O = {
        [f.IE4.FINE]: g.rtcConnectionQualityFine,
        [f.IE4.AVERAGE]: g.rtcConnectionQualityAverage,
        [f.IE4.BAD]: g.rtcConnectionQualityBad,
        [f.IE4.UNKNOWN]: null
    },
    x = {
        [f.IE4.FINE]: a.B_b,
        [f.IE4.AVERAGE]: a.hLg,
        [f.IE4.BAD]: a.mbS,
        [f.IE4.UNKNOWN]: a._3e
    };
function y(e) {
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
    let i = x[t];
    return (0, r.jsx)(i, p({ className: s()(g.ping, { [g.largePing]: n }) }, l));
}
function b(e) {
    let { quality: t, lastPing: n, state: i, className: x, children: b, channelId: E, childrenAsSubtitle: m, connectionStatusTextVariant: C, hasVideo: T } = e,
        I = l.useRef(null),
        v = i === f.hes.RTC_CONNECTED,
        j = l.useCallback(
            (e) => {
                var t, n;
                return (0, r.jsx)(
                    d.Z,
                    ((t = p({}, e)),
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
        { connectionStatus: _, connectionStatusText: S } = u.Z.getStatus(i, T);
    return (0, r.jsxs)('div', {
        className: g.rtcConnectionStatusWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: s()(g.rtcConnectionStatus, O[t], x),
                children: [
                    v &&
                        (0, r.jsx)(a.ua7, {
                            text: t !== f.IE4.UNKNOWN && null != n ? ''.concat(n.toFixed(0), ' ms') : null,
                            children: (e) =>
                                (0, r.jsx)(
                                    y,
                                    p(
                                        {
                                            quality: t,
                                            largePing: m
                                        },
                                        e
                                    )
                                )
                        }),
                    (0, r.jsxs)('div', {
                        className: g.labelWrapper,
                        children: [
                            (0, r.jsx)(a.yRy, {
                                targetElementRef: I,
                                renderPopout: j,
                                position: 'top',
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(a.P3F, {
                                        innerRef: I,
                                        onClick: (e) => {
                                            ((0, c.v)(o.Z.RTC_PANEL, c.d.CONNECTION_STATUS), t(e));
                                        },
                                        children: (0, r.jsx)(h.Z, {
                                            text: S,
                                            textVariant: C,
                                            hasVideo: T,
                                            className: N[_],
                                            hasConnectedChannel: null != E
                                        })
                                    });
                                }
                            }),
                            m ? b : null
                        ]
                    })
                ]
            }),
            m ? null : b
        ]
    });
}
