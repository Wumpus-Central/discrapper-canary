n.d(t, { Z: () => x }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(100527),
    u = n(522651),
    c = n(476221),
    d = n(873596),
    h = n(423516),
    p = n(981631),
    f = n(683560);
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
function y(e) {
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
let O = {
        [p.IE4.UNKNOWN]: a.ua7.Colors.BLACK,
        [p.IE4.BAD]: a.ua7.Colors.RED,
        [p.IE4.AVERAGE]: a.ua7.Colors.YELLOW,
        [p.IE4.FINE]: a.ua7.Colors.GREEN
    },
    N = {
        [p.QKv.CONNECTED]: f.rtcConnectionStatusConnected,
        [p.QKv.CONNECTING]: f.rtcConnectionStatusConnecting,
        [p.QKv.ERROR]: f.rtcConnectionStatusError
    },
    b = {
        [p.IE4.FINE]: f.rtcConnectionQualityFine,
        [p.IE4.AVERAGE]: f.rtcConnectionQualityAverage,
        [p.IE4.BAD]: f.rtcConnectionQualityBad,
        [p.IE4.UNKNOWN]: null
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
            { connectionStatus: l, connectionStatusText: i } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(a.zxk, {
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.NONE,
                onClick: (e) => {
                    (0, u.v)(s.Z.RTC_PANEL, u.d.CONNECTION_STATUS), null == t || t(e);
                },
                children: (0, r.jsx)(h.Z, {
                    text: i,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: N[l],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e,
            { quality: t, smallPing: n, lastPing: l, state: i, className: s, children: u } = this.props;
        return (
            i === p.hes.RTC_CONNECTED &&
                (e = (0, r.jsx)(a.ua7, {
                    text: t !== p.IE4.UNKNOWN && null != l ? ''.concat(l.toFixed(0), ' ms') : null,
                    color: O[t],
                    children: (e) =>
                        (0, r.jsx)(
                            m,
                            y(
                                {
                                    quality: t,
                                    smallPing: n
                                },
                                e
                            )
                        )
                })),
            (0, r.jsxs)('div', {
                className: f.rtcConnectionStatusWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(f.rtcConnectionStatus, b[t], s),
                        children: [
                            e,
                            (0, r.jsx)('div', {
                                className: f.labelWrapper,
                                children: this.renderStatus()
                            })
                        ]
                    }),
                    u
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
                    ((n = y({}, t)),
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
function m(e) {
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
        [p.IE4.FINE]: a.B_b,
        [p.IE4.AVERAGE]: a.hLg,
        [p.IE4.BAD]: a.mbS,
        [p.IE4.UNKNOWN]: a._3e
    }[t];
    return (0, r.jsx)(i, y({ className: o()(f.ping, { [f.smallPing]: n }) }, l));
}
let x = v;
