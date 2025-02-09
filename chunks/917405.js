n.d(t, { Z: () => I }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(481060),
    r = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    N = n(38009);
let f = {
        [h.IE4.UNKNOWN]: a.ua7.Colors.BLACK,
        [h.IE4.BAD]: a.ua7.Colors.RED,
        [h.IE4.AVERAGE]: a.ua7.Colors.YELLOW,
        [h.IE4.FINE]: a.ua7.Colors.GREEN
    },
    g = {
        [h.QKv.CONNECTED]: N.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: N.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: N.rtcConnectionStatusError
    },
    x = {
        [h.IE4.FINE]: N.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: N.rtcConnectionQualityAverage,
        [h.IE4.BAD]: N.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class C extends i.PureComponent {
    renderPopoutTarget(e) {
        let t = this.props.channelId;
        return null == t
            ? e({})
            : (0, l.jsx)(a.yRy, {
                  renderPopout: this.renderPopout(t),
                  position: 'top',
                  children: e
              });
    }
    renderStatus() {
        let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: i, connectionStatusText: s } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, l.jsx)(a.zxk, {
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.NONE,
                onClick: t,
                children: (0, l.jsx)(d.Z, {
                    text: s,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: g[i],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: i, state: s, className: r, children: c } = this.props;
        return (
            s === h.hes.RTC_CONNECTED &&
                (e = (0, l.jsx)(a.ua7, {
                    text: t !== h.IE4.UNKNOWN && null != i ? ''.concat(i.toFixed(0), ' ms') : null,
                    color: f[t],
                    children: (e) =>
                        (0, l.jsx)(p, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                })),
            (0, l.jsxs)('div', {
                className: N.rtcConnectionStatusWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: o()(N.rtcConnectionStatus, x[t], r),
                        children: [
                            e,
                            (0, l.jsx)('div', {
                                className: N.labelWrapper,
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
function p(e) {
    let { quality: t, smallPing: n, ...i } = e;
    if (!(0, a.bWb)().enabled)
        return (0, l.jsx)(r.Z, {
            className: o()(N.ping, { [N.smallPing]: n }),
            foreground: N.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: a.B_b,
            [h.IE4.AVERAGE]: a.hLg,
            [h.IE4.BAD]: a.mbS,
            [h.IE4.UNKNOWN]: a._3e
        }[t];
        return (0, l.jsx)(e, {
            className: o()(N.ping, { [N.smallPing]: n }),
            ...i
        });
    }
}
let I = C;
