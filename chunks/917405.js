(n.d(t, { Z: () => x }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(755721),
    s = n(481060),
    c = n(100527),
    u = n(522651),
    d = n(476221),
    f = n(873596),
    h = n(423516),
    p = n(981631),
    g = n(683560);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            }));
    }
    return e;
}
let b = {
        [p.QKv.CONNECTED]: g.rtcConnectionStatusConnected,
        [p.QKv.CONNECTING]: g.rtcConnectionStatusConnecting,
        [p.QKv.ERROR]: g.rtcConnectionStatusError
    },
    v = {
        [p.IE4.FINE]: g.rtcConnectionQualityFine,
        [p.IE4.AVERAGE]: g.rtcConnectionQualityAverage,
        [p.IE4.BAD]: g.rtcConnectionQualityBad,
        [p.IE4.UNKNOWN]: null
    };
class m extends l.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, r.jsx)(s.yRy, {
                  targetElementRef: this.statusButtonRef,
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: l, connectionStatusText: i } = d.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(a.zx, {
                buttonRef: this.statusButtonRef,
                look: a.zx.Looks.BLANK,
                size: a.zx.Sizes.NONE,
                onClick: (e) => {
                    ((0, u.v)(c.Z.RTC_PANEL, u.d.CONNECTION_STATUS), null == t || t(e));
                },
                children: (0, r.jsx)(h.Z, {
                    text: i,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: b[l],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e,
            { quality: t, smallPing: n, lastPing: l, state: i, className: a, children: c, childrenAsSubtitle: u } = this.props;
        return (
            i === p.hes.RTC_CONNECTED &&
                (e = (0, r.jsx)(s.ua7, {
                    text: t !== p.IE4.UNKNOWN && null != l ? ''.concat(l.toFixed(0), ' ms') : null,
                    children: (e) =>
                        (0, r.jsx)(
                            N,
                            O(
                                {
                                    quality: t,
                                    smallPing: !u && n,
                                    largePing: u
                                },
                                e
                            )
                        )
                })),
            (0, r.jsxs)('div', {
                className: g.rtcConnectionStatusWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(g.rtcConnectionStatus, v[t], a),
                        children: [
                            e,
                            (0, r.jsxs)('div', {
                                className: g.labelWrapper,
                                children: [this.renderStatus(), u ? c : null]
                            })
                        ]
                    }),
                    u ? null : c
                ]
            })
        );
    }
    constructor(...e) {
        (super(...e),
            y(this, 'statusButtonRef', l.createRef()),
            y(this, 'renderPopout', (e) => (t) => {
                var n, l;
                return (0, r.jsx)(
                    f.Z,
                    ((n = O({}, t)),
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
            }));
    }
}
function N(e) {
    var { quality: t, smallPing: n, largePing: l } = e,
        i = (function (e, t) {
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
        })(e, ['quality', 'smallPing', 'largePing']);
    let a = {
        [p.IE4.FINE]: s.B_b,
        [p.IE4.AVERAGE]: s.hLg,
        [p.IE4.BAD]: s.mbS,
        [p.IE4.UNKNOWN]: s._3e
    }[t];
    return (0, r.jsx)(
        a,
        O(
            {
                className: o()(g.ping, {
                    [g.smallPing]: n,
                    [g.largePing]: l
                })
            },
            i
        )
    );
}
let x = m;
