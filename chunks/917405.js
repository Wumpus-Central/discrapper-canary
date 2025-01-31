n.d(t, { Z: () => E }), n(47120);
var l = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    i = n(481060),
    o = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    x = n(239793);
let g = {
        [h.IE4.UNKNOWN]: i.ua7.Colors.BLACK,
        [h.IE4.BAD]: i.ua7.Colors.RED,
        [h.IE4.AVERAGE]: i.ua7.Colors.YELLOW,
        [h.IE4.FINE]: i.ua7.Colors.GREEN
    },
    N = {
        [h.QKv.CONNECTED]: x.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: x.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: x.rtcConnectionStatusError
    },
    C = {
        [h.IE4.FINE]: x.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: x.rtcConnectionQualityAverage,
        [h.IE4.BAD]: x.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class f extends s.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, l.jsx)(i.yRy, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: s, connectionStatusText: r } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, l.jsx)(i.zxk, {
                look: i.zxk.Looks.BLANK,
                size: i.zxk.Sizes.NONE,
                onClick: t,
                children: (0, l.jsx)(d.Z, {
                    text: r,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: N[s],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: s, state: r, className: o, children: c } = this.props;
        return (
            r === h.hes.RTC_CONNECTED &&
                (e = (0, l.jsx)(i.ua7, {
                    text: t !== h.IE4.UNKNOWN && null != s ? ''.concat(s.toFixed(0), ' ms') : null,
                    color: g[t],
                    children: (e) =>
                        (0, l.jsx)(m, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                })),
            (0, l.jsxs)('div', {
                className: x.rtcConnectionStatusWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: a()(x.rtcConnectionStatus, C[t], o),
                        children: [
                            e,
                            (0, l.jsx)('div', {
                                className: x.labelWrapper,
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
        var t, n;
        super(...e),
            (t = 'renderPopout'),
            (n = (e) => (t) =>
                (0, l.jsx)(u.Z, {
                    ...t,
                    channelId: e
                })),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
function m(e) {
    let { quality: t, smallPing: n, ...s } = e;
    if (!(0, i.bWb)().enabled)
        return (0, l.jsx)(o.Z, {
            className: a()(x.ping, { [x.smallPing]: n }),
            foreground: x.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: i.B_b,
            [h.IE4.AVERAGE]: i.hLg,
            [h.IE4.BAD]: i.mbS,
            [h.IE4.UNKNOWN]: i._3e
        }[t];
        return (0, l.jsx)(e, {
            className: a()(x.ping, { [x.smallPing]: n }),
            ...s
        });
    }
}
let E = f;
