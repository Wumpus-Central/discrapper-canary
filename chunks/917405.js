n.d(t, { Z: () => N }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(100527),
    u = n(522651),
    c = n(476221),
    d = n(873596),
    f = n(423516),
    h = n(981631),
    g = n(683560);
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let O = {
        [h.IE4.UNKNOWN]: o.ua7.Colors.BLACK,
        [h.IE4.BAD]: o.ua7.Colors.RED,
        [h.IE4.AVERAGE]: o.ua7.Colors.YELLOW,
        [h.IE4.FINE]: o.ua7.Colors.GREEN
    },
    m = {
        [h.QKv.CONNECTED]: g.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: g.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: g.rtcConnectionStatusError
    },
    v = {
        [h.IE4.FINE]: g.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: g.rtcConnectionQualityAverage,
        [h.IE4.BAD]: g.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class E extends r.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, l.jsx)(o.yRy, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: r, connectionStatusText: i } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, l.jsx)(o.zxk, {
                look: o.zxk.Looks.BLANK,
                size: o.zxk.Sizes.NONE,
                onClick: (e) => {
                    (0, u.v)(s.Z.RTC_PANEL, u.d.CONNECTION_STATUS), null == t || t(e);
                },
                children: (0, l.jsx)(f.Z, {
                    text: i,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: m[r],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e,
            { quality: t, smallPing: n, lastPing: r, state: i, className: s, children: u } = this.props;
        return (
            i === h.hes.RTC_CONNECTED &&
                (e = (0, l.jsx)(o.ua7, {
                    text: t !== h.IE4.UNKNOWN && null != r ? ''.concat(r.toFixed(0), ' ms') : null,
                    color: O[t],
                    children: (e) =>
                        (0, l.jsx)(
                            b,
                            y(
                                {
                                    quality: t,
                                    smallPing: n
                                },
                                e
                            )
                        )
                })),
            (0, l.jsxs)('div', {
                className: g.rtcConnectionStatusWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: a()(g.rtcConnectionStatus, v[t], s),
                        children: [
                            e,
                            (0, l.jsx)('div', {
                                className: g.labelWrapper,
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
            p(this, 'renderPopout', (e) => (t) => {
                var n, r;
                return (0, l.jsx)(
                    d.Z,
                    ((n = y({}, t)),
                    (r = r = { channelId: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n)
                );
            });
    }
}
function b(e) {
    var { quality: t, smallPing: n } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['quality', 'smallPing']);
    let i = {
        [h.IE4.FINE]: o.B_b,
        [h.IE4.AVERAGE]: o.hLg,
        [h.IE4.BAD]: o.mbS,
        [h.IE4.UNKNOWN]: o._3e
    }[t];
    return (0, l.jsx)(i, y({ className: a()(g.ping, { [g.smallPing]: n }) }, r));
}
let N = E;
