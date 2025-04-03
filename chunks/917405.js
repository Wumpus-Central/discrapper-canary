n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(100527),
    c = n(522651),
    u = n(476221),
    d = n(873596),
    h = n(423516),
    f = n(981631),
    p = n(683560);
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
function N(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
let y = {
        [f.IE4.UNKNOWN]: a.ua7.Colors.BLACK,
        [f.IE4.BAD]: a.ua7.Colors.RED,
        [f.IE4.AVERAGE]: a.ua7.Colors.YELLOW,
        [f.IE4.FINE]: a.ua7.Colors.GREEN
    },
    O = {
        [f.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
        [f.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
        [f.QKv.ERROR]: p.rtcConnectionStatusError
    },
    b = {
        [f.IE4.FINE]: p.rtcConnectionQualityFine,
        [f.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
        [f.IE4.BAD]: p.rtcConnectionQualityBad,
        [f.IE4.UNKNOWN]: null
    };
class v extends l.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, r.jsx)(a.yRy, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: l, connectionStatusText: i } = u.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(a.zxk, {
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.NONE,
                onClick: (e) => {
                    (0, c.v)(s.Z.RTC_PANEL, c.d.CONNECTION_STATUS), null == t || t(e);
                },
                children: (0, r.jsx)(h.Z, {
                    text: i,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: O[l],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e,
            { quality: t, smallPing: n, lastPing: l, state: i, className: s, children: c } = this.props;
        return (
            i === f.hes.RTC_CONNECTED &&
                (e = (0, r.jsx)(a.ua7, {
                    text: t !== f.IE4.UNKNOWN && null != l ? ''.concat(l.toFixed(0), ' ms') : null,
                    color: y[t],
                    children: (e) =>
                        (0, r.jsx)(
                            x,
                            N(
                                {
                                    quality: t,
                                    smallPing: n
                                },
                                e
                            )
                        )
                })),
            (0, r.jsxs)('div', {
                className: p.rtcConnectionStatusWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(p.rtcConnectionStatus, b[t], s),
                        children: [
                            e,
                            (0, r.jsx)('div', {
                                className: p.labelWrapper,
                                children: this.renderStatus()
                            })
                        ]
                    }),
                    c
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            g(this, 'renderPopout', (e) => (t) => {
                var n, l;
                return (0, r.jsx)(
                    d.Z,
                    ((n = N({}, t)),
                    (l = l = { channelId: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    n)
                );
            });
    }
}
function x(e) {
    var { quality: t, smallPing: n } = e,
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
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['quality', 'smallPing']);
    let i = {
        [f.IE4.FINE]: a.B_b,
        [f.IE4.AVERAGE]: a.hLg,
        [f.IE4.BAD]: a.mbS,
        [f.IE4.UNKNOWN]: a._3e
    }[t];
    return (0, r.jsx)(i, N({ className: o()(p.ping, { [p.smallPing]: n }) }, l));
}
let m = v;
