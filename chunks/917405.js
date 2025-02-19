n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    f = n(563286);
function p(e, t, n) {
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
function g(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let N = {
        [h.IE4.UNKNOWN]: a.ua7.Colors.BLACK,
        [h.IE4.BAD]: a.ua7.Colors.RED,
        [h.IE4.AVERAGE]: a.ua7.Colors.YELLOW,
        [h.IE4.FINE]: a.ua7.Colors.GREEN
    },
    v = {
        [h.QKv.CONNECTED]: f.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: f.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: f.rtcConnectionStatusError
    },
    O = {
        [h.IE4.FINE]: f.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: f.rtcConnectionQualityAverage,
        [h.IE4.BAD]: f.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class y extends l.PureComponent {
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
                onClick: t,
                children: (0, r.jsx)(d.Z, {
                    text: i,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: v[l],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: l, state: i, className: s, children: c } = this.props;
        return (
            i === h.hes.RTC_CONNECTED &&
                (e = (0, r.jsx)(a.ua7, {
                    text: t !== h.IE4.UNKNOWN && null != l ? ''.concat(l.toFixed(0), ' ms') : null,
                    color: N[t],
                    children: (e) =>
                        (0, r.jsx)(
                            m,
                            g(
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
                        className: o()(f.rtcConnectionStatus, O[t], s),
                        children: [
                            e,
                            (0, r.jsx)('div', {
                                className: f.labelWrapper,
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
            p(this, 'renderPopout', (e) => (t) => {
                var n, l;
                return (0, r.jsx)(
                    u.Z,
                    ((n = g({}, t)),
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
    if (!(0, a.bWb)().enabled)
        return (0, r.jsx)(s.Z, {
            className: o()(f.ping, { [f.smallPing]: n }),
            foreground: f.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: a.B_b,
            [h.IE4.AVERAGE]: a.hLg,
            [h.IE4.BAD]: a.mbS,
            [h.IE4.UNKNOWN]: a._3e
        }[t];
        return (0, r.jsx)(e, g({ className: o()(f.ping, { [f.smallPing]: n }) }, l));
    }
}
let b = y;
