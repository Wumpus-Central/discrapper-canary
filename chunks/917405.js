n.d(t, { Z: () => T });
var l = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(28664),
    s = n(481060),
    u = n(100527),
    c = n(522651),
    d = n(476221),
    f = n(873596),
    g = n(423516),
    h = n(981631),
    p = n(156730);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let N = {
        [h.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: p.rtcConnectionStatusError,
    },
    O = {
        [h.IE4.FINE]: p.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
        [h.IE4.BAD]: p.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null,
    },
    y = {
        [h.IE4.FINE]: s.B_b,
        [h.IE4.AVERAGE]: s.hLg,
        [h.IE4.BAD]: s.mbS,
        [h.IE4.UNKNOWN]: s._3e,
    };
function C(e) {
    var { quality: t, largePing: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        i = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["quality", "largePing"]);
    let r = y[t];
    return (0, l.jsx)(r, E({ className: a()(p.ping, { [p.largePing]: n }) }, i));
}
function T(e) {
    let {
            quality: t,
            lastPing: n,
            state: r,
            className: y,
            children: T,
            channelId: _,
            childrenAsSubtitle: m,
            connectionStatusTextVariant: I,
            hasVideo: S,
        } = e,
        b = i.useRef(null),
        v = r === h.hes.RTC_CONNECTED,
        x = i.useCallback(
            (e) => {
                var t, n;
                return (0, l.jsx)(
                    f.Z,
                    ((t = E({}, e)),
                    (n = n = { channelId: _ }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
            [_],
        ),
        { connectionStatus: P, connectionStatusText: Z } = d.Z.getStatus(r, S);
    return (0, l.jsxs)("div", {
        className: p.rtcConnectionStatusWrapper,
        children: [
            (0, l.jsx)("div", {
                className: a()(p.rtcConnectionStatus, O[t], y),
                ref: b,
                children: (0, l.jsx)(s.yRy, {
                    targetElementRef: b,
                    renderPopout: x,
                    position: "top",
                    children: (e) => {
                        let { onClick: i } = e;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [
                                v &&
                                    (0, l.jsx)(o.u, {
                                        text: t !== h.IE4.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
                                        children: (0, l.jsx)(s.P3F, {
                                            className: p.clickablePing,
                                            onClick: (e) => {
                                                (0, c.v)(u.Z.RTC_PANEL, c.d.CONNECTION_STATUS), i(e);
                                            },
                                            children: (0, l.jsx)(C, {
                                                quality: t,
                                                largePing: m,
                                            }),
                                        }),
                                    }),
                                (0, l.jsxs)("div", {
                                    className: p.labelWrapper,
                                    children: [
                                        (0, l.jsx)(s.P3F, {
                                            onClick: (e) => {
                                                (0, c.v)(u.Z.RTC_PANEL, c.d.CONNECTION_STATUS), i(e);
                                            },
                                            children: (0, l.jsx)(g.Z, {
                                                text: Z,
                                                textVariant: I,
                                                hasVideo: S,
                                                className: N[P],
                                                hasConnectedChannel: null != _,
                                            }),
                                        }),
                                        m ? T : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            m ? null : T,
        ],
    });
}
