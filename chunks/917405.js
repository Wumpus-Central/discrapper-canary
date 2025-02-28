n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    c = n(100527),
    s = n(522651),
    u = n(72416),
    d = n(476221),
    _ = n(873596),
    h = n(423516),
    f = n(981631),
    p = n(341259);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = {
        [f.IE4.UNKNOWN]: l.ua7.Colors.BLACK,
        [f.IE4.BAD]: l.ua7.Colors.RED,
        [f.IE4.AVERAGE]: l.ua7.Colors.YELLOW,
        [f.IE4.FINE]: l.ua7.Colors.GREEN
    },
    y = {
        [f.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
        [f.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
        [f.QKv.ERROR]: p.rtcConnectionStatusError
    },
    m = {
        [f.IE4.FINE]: p.rtcConnectionQualityFine,
        [f.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
        [f.IE4.BAD]: p.rtcConnectionQualityBad,
        [f.IE4.UNKNOWN]: null
    };
class I extends o.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, i.jsx)(l.yRy, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: o, connectionStatusText: r } = d.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(l.zxk, {
                look: l.zxk.Looks.BLANK,
                size: l.zxk.Sizes.NONE,
                onClick: (e) => {
                    (0, s.v)(c.Z.RTC_PANEL, s.d.CONNECTION_STATUS), null == t || t(e);
                },
                children: (0, i.jsx)(h.Z, {
                    text: r,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: y[o],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: o, state: r, className: c, children: s } = this.props;
        return (
            r === f.hes.RTC_CONNECTED &&
                (e = (0, i.jsx)(l.ua7, {
                    text: t !== f.IE4.UNKNOWN && null != o ? ''.concat(o.toFixed(0), ' ms') : null,
                    color: b[t],
                    children: (e) =>
                        (0, i.jsx)(
                            O,
                            v(
                                {
                                    quality: t,
                                    smallPing: n
                                },
                                e
                            )
                        )
                })),
            (0, i.jsxs)('div', {
                className: p.rtcConnectionStatusWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(p.rtcConnectionStatus, m[t], c),
                        children: [
                            e,
                            (0, i.jsx)('div', {
                                className: p.labelWrapper,
                                children: this.renderStatus()
                            })
                        ]
                    }),
                    s
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            g(this, 'renderPopout', (e) => (t) => {
                var n, o;
                return (0, i.jsx)(
                    _.Z,
                    ((n = v({}, t)),
                    (o = o = { channelId: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    n)
                );
            });
    }
}
function O(e) {
    var { quality: t, smallPing: n } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        o = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['quality', 'smallPing']);
    if (!(0, l.bWb)().enabled)
        return (0, i.jsx)(u.Z, {
            className: a()(p.ping, { [p.smallPing]: n }),
            foreground: p.pingForeground
        });
    {
        let e = {
            [f.IE4.FINE]: l.B_b,
            [f.IE4.AVERAGE]: l.hLg,
            [f.IE4.BAD]: l.mbS,
            [f.IE4.UNKNOWN]: l._3e
        }[t];
        return (0, i.jsx)(e, v({ className: a()(p.ping, { [p.smallPing]: n }) }, o));
    }
}
let N = I;
