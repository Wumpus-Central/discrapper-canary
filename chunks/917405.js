n.d(t, { Z: () => m }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(481060),
    s = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    f = n(449045);
let g = {
        [h.IE4.UNKNOWN]: o.ua7.Colors.BLACK,
        [h.IE4.BAD]: o.ua7.Colors.RED,
        [h.IE4.AVERAGE]: o.ua7.Colors.YELLOW,
        [h.IE4.FINE]: o.ua7.Colors.GREEN
    },
    p = {
        [h.QKv.CONNECTED]: f.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: f.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: f.rtcConnectionStatusError
    },
    N = {
        [h.IE4.FINE]: f.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: f.rtcConnectionQualityAverage,
        [h.IE4.BAD]: f.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class v extends i.PureComponent {
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
            { connectionStatus: i, connectionStatusText: a } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, l.jsx)(o.zxk, {
                look: o.zxk.Looks.BLANK,
                size: o.zxk.Sizes.NONE,
                onClick: t,
                children: (0, l.jsx)(d.Z, {
                    text: a,
                    textVariant: this.props.connectionStatusTextVariant,
                    hasVideo: this.props.hasVideo,
                    className: p[i],
                    hasConnectedChannel: null != n
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: i, state: a, className: s, children: c } = this.props;
        return (
            a === h.hes.RTC_CONNECTED &&
                (e = (0, l.jsx)(o.ua7, {
                    text: t !== h.IE4.UNKNOWN && null != i ? ''.concat(i.toFixed(0), ' ms') : null,
                    color: g[t],
                    children: (e) =>
                        (0, l.jsx)(x, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                })),
            (0, l.jsxs)('div', {
                className: f.rtcConnectionStatusWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: r()(f.rtcConnectionStatus, N[t], s),
                        children: [
                            e,
                            (0, l.jsx)('div', {
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
function x(e) {
    let { quality: t, smallPing: n, ...i } = e;
    if (!(0, o.bWb)().enabled)
        return (0, l.jsx)(s.Z, {
            className: r()(f.ping, { [f.smallPing]: n }),
            foreground: f.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: o.B_b,
            [h.IE4.AVERAGE]: o.hLg,
            [h.IE4.BAD]: o.mbS,
            [h.IE4.UNKNOWN]: o._3e
        }[t];
        return (0, l.jsx)(e, {
            className: r()(f.ping, { [f.smallPing]: n }),
            ...i
        });
    }
}
let m = v;
