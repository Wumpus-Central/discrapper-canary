n.d(t, { Z: () => N });
var r = n(951288),
    l = n(647438),
    s = n(120356),
    i = n.n(s),
    a = n(481060),
    o = n(100527),
    c = n(522651),
    u = n(476221),
    d = n(873596),
    h = n(423516),
    f = n(981631),
    g = n(445233);
function p(e) {
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
}
let O = {
        [f.QKv.CONNECTED]: g.rtcConnectionStatusConnected,
        [f.QKv.CONNECTING]: g.rtcConnectionStatusConnecting,
        [f.QKv.ERROR]: g.rtcConnectionStatusError,
    },
    y = {
        [f.IE4.FINE]: g.rtcConnectionQualityFine,
        [f.IE4.AVERAGE]: g.rtcConnectionQualityAverage,
        [f.IE4.BAD]: g.rtcConnectionQualityBad,
        [f.IE4.UNKNOWN]: null,
    },
    x = {
        [f.IE4.FINE]: a.B_b,
        [f.IE4.AVERAGE]: a.hLg,
        [f.IE4.BAD]: a.mbS,
        [f.IE4.UNKNOWN]: a._3e,
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
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["quality", "largePing"]);
    let s = x[t];
    return (0, r.jsx)(s, p({ className: i()(g.ping, { [g.largePing]: n }) }, l));
}
function N(e) {
    let {
            quality: t,
            lastPing: n,
            state: s,
            className: x,
            children: N,
            channelId: m,
            childrenAsSubtitle: E,
            connectionStatusTextVariant: C,
            hasVideo: j,
        } = e,
        v = l.useRef(null),
        T = s === f.hes.RTC_CONNECTED,
        I = l.useCallback(
            (e) => {
                var t, n;
                return (0, r.jsx)(
                    d.Z,
                    ((t = p({}, e)),
                    (n = n = { channelId: m }),
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
                    t),
                );
            },
            [m],
        ),
        { connectionStatus: P, connectionStatusText: S } = u.Z.getStatus(s, j);
    return (0, r.jsxs)("div", {
        className: g.rtcConnectionStatusWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: i()(g.rtcConnectionStatus, y[t], x),
                children: [
                    T &&
                        (0, r.jsx)(a.ua7, {
                            text: t !== f.IE4.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
                            children: (e) =>
                                (0, r.jsx)(
                                    b,
                                    p(
                                        {
                                            quality: t,
                                            largePing: E,
                                        },
                                        e,
                                    ),
                                ),
                        }),
                    (0, r.jsxs)("div", {
                        className: g.labelWrapper,
                        children: [
                            (0, r.jsx)(a.yRy, {
                                targetElementRef: v,
                                renderPopout: I,
                                position: "top",
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(a.P3F, {
                                        innerRef: v,
                                        onClick: (e) => {
                                            (0, c.v)(o.Z.RTC_PANEL, c.d.CONNECTION_STATUS), t(e);
                                        },
                                        children: (0, r.jsx)(h.Z, {
                                            text: S,
                                            textVariant: C,
                                            hasVideo: j,
                                            className: O[P],
                                            hasConnectedChannel: null != m,
                                        }),
                                    });
                                },
                            }),
                            E ? N : null,
                        ],
                    }),
                ],
            }),
            E ? null : N,
        ],
    });
}
